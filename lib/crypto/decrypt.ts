import { xchacha20poly1305 } from "@noble/ciphers/chacha.js"
import {
	CryptoURL,
	DecryptionError,
	deriveKey,
	EncryptionAlgorithm,
	fromBytes,
	UnsupportedEncryptionAlgorithmError,
} from "./mod.ts"

/**
 * Decrypts the encrypted data using the given key and password
 * @param passphrase Passphrase used to encrypt the data
 * @param cryptoURL Encrypted data and encryption parameters in the form of a CryptoURL
 * @returns Decrypted data string
 */
export async function decrypt(passphrase: string | Uint8Array, cryptoURL: string): Promise<string>

/**
 * Decrypts the encrypted data using the given key and password
 * @param passphrase Passphrase used to encrypt the data
 * @param cryptoURL Encrypted data and encryption parameters in the form of a CryptoURL
 * @param data Specify data if the encrypted data is not part of the CryptoURL
 * @returns Decrypted data string
 */
export async function decrypt(passphrase: string | Uint8Array, cryptoURL: string, data: Uint8Array): Promise<Uint8Array>

export async function decrypt(
	passphrase: string | Uint8Array,
	cryptoURL: string,
	data?: Uint8Array,
): Promise<unknown> {
	const c = new CryptoURL(cryptoURL, data)

	switch (c.algorithm) {
		case EncryptionAlgorithm.AES256GCM: {
			const res = await decryptAES256GCM(passphrase, c)
			return data ? res : fromBytes(res)
		}
		case EncryptionAlgorithm.XChaCha20Poly1305: {
			const res = await decryptXChaCha20Poly1305(passphrase, c)
			return data ? res : fromBytes(res)
		}
		default:
			throw new UnsupportedEncryptionAlgorithmError(c.algorithm)
	}
}

/**
 * Decrypts the encrypted data with the given key and optional password using AES256-GCM
 * @param passphrase Passphrase used to encrypt the data
 * @param cryptoURL Encrypted data and encryption parameters in the form of a CryptoURL
 * @returns Decrypted data string
 */
async function decryptAES256GCM(passphrase: string | Uint8Array, cryptoURL: CryptoURL): Promise<Uint8Array> {
	const iv = cryptoURL.getBase58("nonce") as Uint8Array<ArrayBuffer>
	const k = await deriveKey(passphrase, cryptoURL)

	try {
		const gcmParams = { name: "AES-GCM", iv: iv, additionalData: new Uint8Array() } satisfies AesGcmParams
		return new Uint8Array(
			await globalThis.crypto.subtle.decrypt(
				gcmParams,
				k as CryptoKey,
				cryptoURL.data as Uint8Array<ArrayBuffer>,
			),
		)
	} catch (error) {
		throw new DecryptionError(error instanceof Error ? error.message : String(error))
	}
}

/**
 * Decrypts the encrypted data with the given key and optional password using XChaCha20-Poly1305
 * @param passphrase Passphrase used to encrypt the data
 * @param cryptoURL Encrypted data and encryption parameters in the form of a CryptoURL
 * @returns Decrypted data string
 */
async function decryptXChaCha20Poly1305(passphrase: string | Uint8Array, cryptoURL: CryptoURL): Promise<Uint8Array> {
	const iv = cryptoURL.getBase58("nonce")
	const k = await deriveKey(passphrase, cryptoURL)

	try {
		return xchacha20poly1305(k as Uint8Array, iv).decrypt(cryptoURL.data)
	} catch (error) {
		throw new DecryptionError(error instanceof Error ? error.message : String(error))
	}
}
