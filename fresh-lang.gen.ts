/* This file is autogenerated by @nihility-io/fresh-lang. DO NOT EDIT! */
import { helperTranslate, helperGetTranslation, helperUseLanguage, TrimPrefix, setLanguageMetadata } from "@nihility-io/fresh-lang"

/** Register language metadata with the Fresh Plugin */
setLanguageMetadata({"en":{"NativeName":"English","EnglishName":"English","Code":"en","Author":"Nihility.io"},"de":{"NativeName":"Deutsch","EnglishName":"German","Code":"de","Author":"Nihility.io"}})


/**
* Currently supported languages
*/
export enum Language { 
    English = "en",
    German = "de",
}

export interface SupportedLanguage {
	name: Language
	label: string
	native: string
	author: string
}

/**
 * Metadata of the supported languages
 */
export const supportedLanguages: SupportedLanguage[] = [
    { name: Language.English, label: "English", native: "English", author: "Nihility.io" },
    { name: Language.German, label: "German", native: "Deutsch", author: "Nihility.io" },
]

/**
 * Checks if a language code is supported
 * @param lang Language code
 */
export const isLanguageSupported = (lang: string): boolean =>
	!!supportedLanguages.find(x => x.name === lang)

/**
* List of all translated keys
*/
export type TranslationKey = 
    | "NewSecret.Title"
    | "NewSecret.Description"
    | "NewSecret.Create"
    | "NewSecret.Expiration.Title"
    | "NewSecret.Expiration.Description"
    | "NewSecret.Expiration.Expire.Day.Many"
    | "NewSecret.Expiration.Expire.Day.One"
    | "NewSecret.Expiration.Expire.Hour.Many"
    | "NewSecret.Expiration.Expire.Hour.One"
    | "NewSecret.Expiration.Expire.Minute.Many"
    | "NewSecret.Expiration.Expire.Minute.One"
    | "NewSecret.Expiration.Expire.Month.Many"
    | "NewSecret.Expiration.Expire.Month.One"
    | "NewSecret.Expiration.Expire.Week.Many"
    | "NewSecret.Expiration.Expire.Week.One"
    | "NewSecret.Expiration.Expire.Year.Many"
    | "NewSecret.Expiration.Expire.Year.One"
    | "NewSecret.Files.Title"
    | "NewSecret.Files.Description"
    | "NewSecret.Files.DragAndDrop"
    | "NewSecret.RequiredByPolicy"
    | "NewSecret.Options.Title"
    | "NewSecret.Options.Description"
    | "NewSecret.Options.Password.Title"
    | "NewSecret.Options.Password.Description"
    | "NewSecret.Options.Password.Placeholder"
    | "NewSecret.Options.Password.RepeatPlaceholder"
    | "NewSecret.Options.Password.Mismatch"
    | "NewSecret.Options.Burn.Title"
    | "NewSecret.Options.Burn.Description"
    | "NewSecret.Options.SlowBurn.Title"
    | "NewSecret.Options.SlowBurn.Description"
    | "NewSecret.Options.SlowBurn.Status"
    | "ShareSecret.Title"
    | "ShareSecret.Description"
    | "ShareSecret.Expires"
    | "ShareSecret.Actions.New"
    | "ShareSecret.Actions.Open"
    | "ShareSecret.Actions.CopyLink"
    | "ShareSecret.Actions.GenerateQR"
    | "ShareSecret.Actions.Email"
    | "ShareSecret.Actions.Delete"
    | "ViewSecret.Title"
    | "ViewSecret.Description"
    | "ViewSecret.Decrypt"
    | "ViewSecret.Password.Title"
    | "ViewSecret.Password.Description"
    | "ViewSecret.Read"
    | "ViewSecret.ReadConfirm"
    | "ViewSecret.Files.Title"
    | "ViewSecret.DecryptionError"
    | "DeleteSecret.Title"
    | "DeleteSecret.Description"
    | "DeleteSecret.Delete"
    | "Credits.Title"
    | "Credits.Description"
    | "Credits.BrandedNotice"
    | "Credits.SourceNotice"
    | "Credits.Translations.Title"
    | "Credits.Translations.Description"
    | "Credits.Translations.Headers.Author"
    | "Credits.Translations.Headers.Translation"
    | "Credits.Components.Title"
    | "Credits.Components.Description"
    | "Credits.Components.Headers.Author"
    | "Credits.Components.Headers.Component"
    | "Credits.Components.Headers.License"
    | "Credits.Components.Headers.Version"
    | "TermsOfService.Title"
    | "TermsOfService.Content"
    | "TermsOfService.Accept"
    | "TermsOfService.Decline"
    | "Errors.SecretNotFoundError"
    | "Errors.SecretAlreadyExistsError"
    | "Errors.SecretListExistsError"
    | "Errors.SecretReadError"
    | "Errors.SecretWriteError"
    | "Errors.SecretDeleteError"
    | "Errors.SecretParseError"
    | "Errors.SecretPolicyError"
    | "Errors.SecretSizeLimitError"
    | "ErrorPage.NotFound.Title"
    | "ErrorPage.NotFound.Description"
    | "ErrorPage.NotFound.GoHome"

/**
* Preact hook for reading and setting the current language
* @param initialLanguage Language used until the language cookie is read on the client's side. Optimally set this value using the `state.lang`
* @returns Current language and a language setter
*/  
export const useLanguage = (initialLanguage: Language): [Language, (lang: Language) => void] =>
   helperUseLanguage(initialLanguage)

/**
* Preact hook for using translations based on the current language
* @param initialLanguage Language used until the language cookie is read on the client's side. Optimally set this value using the `state.lang`
* @returns Translate function
* @example
* export default () => {
*     const $ = useTranslation(Language.English)
*     return (
*        <h1>$("Home.Greeting", { name: "John Smith" })</h1>
*     )
* }
*/
export const useTranslation = (initialLanguage: Language): (key: TranslationKey, params?: Record<string, string>) => string => {
   const [language] = useLanguage(initialLanguage)
   return translate(language)
}

/**
* Preact hook for using translations based on the current language
* @param initialLanguage Language used until the language cookie is read on the client's side. Optimally set this value using the `state.lang`
* @returns Translate function
* @example
* export default () => {
*     const $ = useTranslationWithPrefix(Language.English, "Home")
*     return (
*        <h1>$("Greeting", { name: "John Smith" })</h1>
*     )
* }
*/
export const useTranslationWithPrefix =
	<P extends string>(initialLanguage: Language, prefix: P) =>
	(key: TrimPrefix<P, TranslationKey>, params?: Record<string, string>) =>
		useTranslation(initialLanguage)(prefix + "." + key as unknown as TranslationKey, params)


/**
 * Translated strings from for translation files
 */
const translations: Record<Language, Record<TranslationKey, string>> = {
    "en": {
        "NewSecret.Title": "Create New Secret",
        "NewSecret.Description": "Create a new encrypted secret and share it with as many people as you like via a link. Your secret is encrypted on your device and then sent to the server where it is kept until it is opened or expired. The secret can only be decrypted via the link.",
        "NewSecret.Create": "Create",
        "NewSecret.Expiration.Title": "Expiration",
        "NewSecret.Expiration.Description": "Choose when the secret should expire. Secrets are automatically deleted after the set time has passed.",
        "NewSecret.Expiration.Expire.Day.Many": "{{count}} days",
        "NewSecret.Expiration.Expire.Day.One": "One day",
        "NewSecret.Expiration.Expire.Hour.Many": "{{count}} hours",
        "NewSecret.Expiration.Expire.Hour.One": "One hour",
        "NewSecret.Expiration.Expire.Minute.Many": "{{count}} minutes",
        "NewSecret.Expiration.Expire.Minute.One": "One minute",
        "NewSecret.Expiration.Expire.Month.Many": "{{count}} months",
        "NewSecret.Expiration.Expire.Month.One": "One month",
        "NewSecret.Expiration.Expire.Week.Many": "{{count}} weeks",
        "NewSecret.Expiration.Expire.Week.One": "One week",
        "NewSecret.Expiration.Expire.Year.Many": "{{count}} years",
        "NewSecret.Expiration.Expire.Year.One": "One year",
        "NewSecret.Files.Title": "Files",
        "NewSecret.Files.Description": "Upload files and share them as part of the secret. Note: The total size of the secret (the text and files) cannot exceed {{size}} MB.",
        "NewSecret.Files.DragAndDrop": "Click here to upload or drag and drop a file onto this field.",
        "NewSecret.RequiredByPolicy": "You cannot change this option since it's required by {{name}}'s policies.",
        "NewSecret.Options.Title": "Options",
        "NewSecret.Options.Description": "",
        "NewSecret.Options.Password.Title": "Password",
        "NewSecret.Options.Password.Description": "Protect your secret with a password for an additional layer of security",
        "NewSecret.Options.Password.Placeholder": "Password",
        "NewSecret.Options.Password.RepeatPlaceholder": "Password (Repeat)",
        "NewSecret.Options.Password.Mismatch": "The passwords do not match.",
        "NewSecret.Options.Burn.Title": "Burn after reading",
        "NewSecret.Options.Burn.Description": "Automatically delete the secret once it has been opened (recommended in most cases)",
        "NewSecret.Options.SlowBurn.Title": "Enable slow burn",
        "NewSecret.Options.SlowBurn.Description": "Allow a number of re-reads within 5 minutes of opening the secret. For example, this option is useful if you want to send a secret to several people in a meeting.",
        "NewSecret.Options.SlowBurn.Status": "Allow secret to be read {{count}} time(s) within 5 minutes of opening the secret for the first time.",
        "ShareSecret.Title": "Share Secret",
        "ShareSecret.Description": "Send the link below to the person you want to share the secret with. Any person with this link will be able to view the secret.",
        "ShareSecret.Expires": "Expires",
        "ShareSecret.Actions.New": "New",
        "ShareSecret.Actions.Open": "Open Link",
        "ShareSecret.Actions.CopyLink": "Copy Link",
        "ShareSecret.Actions.GenerateQR": "Generate QR Code",
        "ShareSecret.Actions.Email": "Email Link",
        "ShareSecret.Actions.Delete": "Delete Link",
        "ViewSecret.Title": "Secret",
        "ViewSecret.Description": "You were sent this secret message. It is meant for your eyes only. Do not share it with anyone.",
        "ViewSecret.Decrypt": "Decrypt",
        "ViewSecret.Password.Title": "Password",
        "ViewSecret.Password.Description": "This secret is protected by a password. Please enter the password in order to decrypt this secret.",
        "ViewSecret.Read": "Read",
        "ViewSecret.ReadConfirm": "This secret will be automatically deleted after opening it. By clicking on \"Read\", you acknowledge that you cannot open this secret a second time after you have closed this window.",
        "ViewSecret.Files.Title": "Attached Files",
        "ViewSecret.DecryptionError": "Unable to decrypt the secret. This is likely due to a wrong password. PLease try again.\n",
        "DeleteSecret.Title": "Delete Secret",
        "DeleteSecret.Description": "Do you want to delete the secret with the ID {{id}}?",
        "DeleteSecret.Delete": "Delete",
        "Credits.Title": "Credits",
        "Credits.Description": "{{name}} is inspired by <a href=\"https://privatebin.info\">PrivateBin</a>. PrivateBin is developed by <a href=\"https://github.com/PrivateBin/PrivateBin/graphs/contributors\">El RIDO</a> among others and released under the <a  href=\"https://github.com/PrivateBin/PrivateBin/blob/master/LICENSE.md\">Zlib License</a>. <br/> {{name}} has been completely redeveloped and combines the basic functionality of PrivateBin with useful extensions.\n",
        "Credits.BrandedNotice": "{{name}} is based on Nihility.io SecretBin.\n",
        "Credits.SourceNotice": "Nihility.io SecretBin is open source and licensed under MIT. If you want to host your own version of SecretBin, head over to GitHub.\n",
        "Credits.Translations.Title": "Translations",
        "Credits.Translations.Description": "Below you will find a list of all supported translations and their authors.",
        "Credits.Translations.Headers.Author": "Author",
        "Credits.Translations.Headers.Translation": "Translation",
        "Credits.Components.Title": "Components",
        "Credits.Components.Description": "Below you will find a list of all software components used by {{name}}, along with their license.'",
        "Credits.Components.Headers.Author": "Author(s)",
        "Credits.Components.Headers.Component": "Component",
        "Credits.Components.Headers.License": "Licenses",
        "Credits.Components.Headers.Version": "Version",
        "TermsOfService.Title": "Terms of Service",
        "TermsOfService.Content": "<h2>Usage Policy</h2>\n<p class=\"text-base text-gray-500 dark:text-gray-400\">\n  This services is provided as is. <b>{{name}} is NOT a public service</b>. It is a private project and not intended to be used by anyone\n  aside from my friends and acquaintances which express permission. Secrets submitted to {{name}} may be\n  deleted at anytime without prior notice.\n</p>\n<br />\n<h2>Data Policy</h2>\n<p class=\"text-base text-gray-500 dark:text-gray-400\">\n  {{name}} uses cookies in order to store user settings like the preferred language. Cookies are NOT use\n  to personally identify you or your browser. <br />\n  The hoster of {{name}} may also collect the following data for server logging:\n  <ul class=\"space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400\">\n    <li>- Your IP address: A number used to identify your internet connection</li>\n    <li>\n      - Your User-Agent: A string sent by your browser which contains information about your browser and\n      device like browser type and version and the operating system you use e.g. Windows 11\n    </li>\n    <li>- Time and date when you access {{name}}</li>\n  </ul>\n</p>\n<br />\n<p class=\"text-base text-gray-500 dark:text-gray-400\">\n  <b><i>If you disagree with these terms, please close this page.</i></b>\n</p>\n",
        "TermsOfService.Accept": "I accept",
        "TermsOfService.Decline": "Decline",
        "Errors.SecretNotFoundError": "A secret with the ID {{id}} does not exist.",
        "Errors.SecretAlreadyExistsError": "A secret with the ID {{id}} already exists.",
        "Errors.SecretListExistsError": "Failed to get secrets.",
        "Errors.SecretReadError": "Unable to read secret with ID {{id}}.",
        "Errors.SecretWriteError": "Unable to write secret with ID {{id}}.",
        "Errors.SecretDeleteError": "Unable to delete secret with ID {{id}}.",
        "Errors.SecretParseError": "The secret has an invalid format. Details: {{reason}}",
        "Errors.SecretPolicyError": "The secret you are trying to create violates the policies. Details: {{reason}}",
        "Errors.SecretSizeLimitError": "The total size of the secret ({{size}}) exceeds the maximum allowed size of {{maxSize}}.",
        "ErrorPage.NotFound.Title": "Page not NotFound",
        "ErrorPage.NotFound.Description": "The page you were looking for doesn't exist.",
        "ErrorPage.NotFound.GoHome": "Go back home"
    },
    "de": {
        "NewSecret.Title": "Neues Geheimnis anlegen",
        "NewSecret.Description": "Erstelle ein neues, verschlüsseltes Geheimnis und teile es mit beliebig vielen Personen über einen Link. Das Geheimnis wird auf deinem Gerät verschlüsselt und dann an den Server gesendet, wo es aufbewahrt wird, bis es wieder geöffnet wird oder bis es abläuft. Das Geheimnis kann nur über den Link entschlüsseln werden.",
        "NewSecret.Create": "Erstellen",
        "NewSecret.Expiration.Title": "Ablaufzeit",
        "NewSecret.Expiration.Description": "Wähle, wie lange das Geheimnis gültig sein soll. Nach Ablauf der Zeit wird das Geheimnis automatisch gelöscht.",
        "NewSecret.Expiration.Expire.Day.Many": "{{count}} Tage",
        "NewSecret.Expiration.Expire.Day.One": "Ein Tag",
        "NewSecret.Expiration.Expire.Hour.Many": "{{count}} Stunden",
        "NewSecret.Expiration.Expire.Hour.One": "Eine Stunde",
        "NewSecret.Expiration.Expire.Minute.Many": "{{count}} Minuten",
        "NewSecret.Expiration.Expire.Minute.One": "Eine Minute",
        "NewSecret.Expiration.Expire.Month.Many": "{{count}} Monate",
        "NewSecret.Expiration.Expire.Month.One": "Ein Monat",
        "NewSecret.Expiration.Expire.Week.Many": "{{count}} Wochen",
        "NewSecret.Expiration.Expire.Week.One": "Eine Woche",
        "NewSecret.Expiration.Expire.Year.Many": "{{count}} Jahre",
        "NewSecret.Expiration.Expire.Year.One": "Ein Jahr",
        "NewSecret.Files.Title": "Dateien",
        "NewSecret.Files.Description": "Lade Dateien hoch und teile sie als Teil des Geheimnisses. Anmerkung: Das gesamte Geheimnis (der Text und die Datei(en)) darf {{size}} MB nicht überschreiten.",
        "NewSecret.Files.DragAndDrop": "Klicke hier zum Hochladen oder ziehe eine Datei in dieses Feld.",
        "NewSecret.RequiredByPolicy": "Du kannst diese option nicht ändern, da sie von {{name}} vorgeschrieben ist.",
        "NewSecret.Options.Title": "Optionen",
        "NewSecret.Options.Description": "",
        "NewSecret.Options.Password.Title": "Passwort",
        "NewSecret.Options.Password.Description": "Schütze dein Geheimnis mit einem weiteren Faktor.",
        "NewSecret.Options.Password.Placeholder": "Passwort",
        "NewSecret.Options.Password.RepeatPlaceholder": "Passwort (Wiederholung)",
        "NewSecret.Options.Password.Mismatch": "Die Passwörter stimmen nicht überein.",
        "NewSecret.Options.Burn.Title": "Nach dem Öffnen löschen",
        "NewSecret.Options.Burn.Description": "Automatische Löschung des Geheimnisse nach dem erstmaligen Öffnen (in den meisten Fällen empfohlen)",
        "NewSecret.Options.SlowBurn.Title": "Verzögertes Löschen aktivieren",
        "NewSecret.Options.SlowBurn.Description": "Erlaubt eine bestimmte Anzahl von Lesezugriffen innerhalb von 5 Minuten nach dem Öffnen des Geheimnisses. Diese Option ist nützlich, wenn du beispielsweise ein Geheimnis an mehrere Personen in einer Besprechung senden möchtest.",
        "NewSecret.Options.SlowBurn.Status": "Erlaube {{count}} Lesezugriffe innerhalb von 5 Minuten nach dem ersten Öffnen des Geheimnisses.",
        "ShareSecret.Title": "Geheimnis teilen",
        "ShareSecret.Description": "Sende den unten stehenden Link an die Person, mit der du das Geheimnis teilen möchtest. Jeder, der den Link hat, ist in der Lage, sich das Geheimnis anzusehen.",
        "ShareSecret.Expires": "Verfällt am",
        "ShareSecret.Actions.New": "Neu",
        "ShareSecret.Actions.Open": "Open Link",
        "ShareSecret.Actions.CopyLink": "Link kopieren",
        "ShareSecret.Actions.GenerateQR": "QR-Code generieren",
        "ShareSecret.Actions.Email": "Link per E-Mail senden",
        "ShareSecret.Actions.Delete": "Link löschen",
        "ViewSecret.Title": "Geheimnis",
        "ViewSecret.Description": "Jemand hat dir diese geheime Nachricht geschickt. Diese ist nur für deine Augen bestimmt. Teile sie mit keinem Dritten.",
        "ViewSecret.Decrypt": "Entschlüsseln",
        "ViewSecret.Password.Title": "Passwort",
        "ViewSecret.Password.Description": "Dieses Geheimnis ist durch ein Passwort geschützt. Bitte gebe das Passwort ein, um das Geheimnis zu entschlüsseln.",
        "ViewSecret.Read": "Lesen",
        "ViewSecret.ReadConfirm": "Dieses Geheimnis wird nach dem Öffnen automatisch gelöscht. Mit dem Klick auf \"Lesen\" nimmst du zur Kenntnis, dass du dieses Geheimnis kein zweites Mal öffnen kannst, nachdem du dieses Fenster geschlossen hast.",
        "ViewSecret.Files.Title": "Angehängte Dateien",
        "ViewSecret.DecryptionError": "Das Geheimnis konnte nicht entschlüsselt werden. Dies kann z.B. an einem falschen Passwort liegen. Bitte versuche es erneut.\n",
        "DeleteSecret.Title": "Geheimnis löschen",
        "DeleteSecret.Description": "Möchtest du das Geheimnis mit der ID {{id}} löschen?",
        "DeleteSecret.Delete": "Löschen",
        "Credits.Title": "Credits",
        "Credits.Description": "{{name}} ist von <a href=\"https://privatebin.info\">PrivateBin</a> inspiriert. PrivateBin wird unter anderem von <a href=\"https://github.com/PrivateBin/PrivateBin/graphs/contributors\">El RIDO</a> entwickelt und wird unter der  <a href=\"https://github.com/PrivateBin/PrivateBin/blob/master/LICENSE.md\">Zlib Lizenz</a> bereitgestellt. <br/> {{name}} wurde vollkommen neu entwickelt und vereint die Basisfunktionalität von PrivateBin mit sinnvollen Erweiterungen.\n",
        "Credits.BrandedNotice": "{{name}} basiert auf Nihility.io SecretBin.\n",
        "Credits.SourceNotice": "Nihility.io SecretBin ist Open Source und steht unter MIT-Lizenz zur Verfügung. Wenn du deine eigene Version von SecretBin hosten möchtest, findest du den Quellcode auf <a href=\"https://github.com/Nihility-io/SecretBin\">GitHub</a>.\n",
        "Credits.Translations.Title": "Übersetzungen",
        "Credits.Translations.Description": "Unten findest du eine Liste von allen Übersetzungen und deren Autoren.",
        "Credits.Translations.Headers.Author": "Autor",
        "Credits.Translations.Headers.Translation": "Übersetzung",
        "Credits.Components.Title": "Komponenten",
        "Credits.Components.Description": "Unten findest du eine Liste von allen genutzten Softwarekomponenten zusammen mit deren Lizenzen.",
        "Credits.Components.Headers.Author": "Autor(en)",
        "Credits.Components.Headers.Component": "Komponente",
        "Credits.Components.Headers.License": "Lizenz",
        "Credits.Components.Headers.Version": "Version",
        "TermsOfService.Title": "Nutzungsbedingungen",
        "TermsOfService.Content": "<h2>Usage Policy</h2>\n<p class=\"text-base text-gray-500 dark:text-gray-400\">\n  Dieser Dienst wird ohne Gewähr angeboten. <b>{{name}} ist kein öffentlicher Service</b>. Es handelt sich um ein privates Projekt,\n  das ausschließlich für meine Freunde und Bekannten nach ausdrücklicher Erlaubnis bestimmt ist.\n  Geheimnisse, die mit {{name}} erstellt wurden, können jederzeit und ohne vorherige Ankündigung gelöscht werden.\n</p>\n<br />\n<h2>Datenschutz</h2>\n<p class=\"text-base text-gray-500 dark:text-gray-400\">\n  {{name}} nutzt Cookies um Einstellungen wie z.B. die präferierte Sprache zu speichern. Cookies werden nicht\n  dazu genutzt und dich oder dein Geraet zu identifizieren. <br />\n  Der Hoster von {{name}} sammelt möglicherweise folgende Daten in Form von Server-Logs:\n  <ul class=\"space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400\">\n    <li>- Deine IP-Adresse: Eine Zeichenkette zur Identifikation deines Internetanschlusses.</li>\n    <li>- Dein User-Agent: Eine Zeichenkette, die von deinem Browser gesendet wird. Diese enthält Informationen zu deinen Browser und Betriebssystem, wie z.B. Version und Typ.</li>\n    <li>- Zeit und Datum des Zugriffs auf {{name}}.</li>\n  </ul>\n</p>\n<br />\n<p class=\"text-base text-gray-500 dark:text-gray-400\">\n  <b><i>Wenn du mit diesen Bedingungen nicht einverstanden bist, verlasse bitte diese Seite.</i></b>\n</p>\n",
        "TermsOfService.Accept": "Ich akzeptiere",
        "TermsOfService.Decline": "Ablehnen",
        "Errors.SecretNotFoundError": "Ein Geheimnis mit der ID {{id}} wurde nicht gefunden.",
        "Errors.SecretAlreadyExistsError": "Ein Geheimnis mit der ID {{id}} existiert bereits.",
        "Errors.SecretListExistsError": "Es ist ein Fehler beim Landen der Geheimnisse aufgetreten.",
        "Errors.SecretReadError": "Es ist ein Fehler beim Lesen des Geheimnisses mit der ID {{id}} aufgetreten.",
        "Errors.SecretWriteError": "Es ist ein Fehler beim Schreiben des Geheimnisses mit der ID {{id}} aufgetreten.",
        "Errors.SecretDeleteError": "Es ist ein Fehler beim Löschen des Geheimnisses mit der ID {{id}} aufgetreten.",
        "Errors.SecretParseError": "Das Geheimnis hat ein ungültiges Format. Details: {{reason}}",
        "Errors.SecretPolicyError": "Das Geheimnis was du versuchst anzulegen verstößt gegen die Vorgaben. Details: {{reason}}",
        "Errors.SecretSizeLimitError": "The total size of the secret ({{size}}) exceeds the maximum allowed size of {{maxSize}}.",
        "ErrorPage.NotFound.Title": "Seite nicht gefunden",
        "ErrorPage.NotFound.Description": "Die gesuchte Seite konnte nicht gefunden werden.",
        "ErrorPage.NotFound.GoHome": "Zurück zur Startseite"
    }
}

/**
 * Create a translation function for a give language
 * @param lang Language
 */
const translate: (lang: Language) => (key: TranslationKey, params?: Record<string, string>) => string = helperTranslate(
	Language.English,
	[Language.English, Language.German],
	translations,
)

/**
 * Gets the translation in a given language (outside of Preact)
 * @param lang Language
 * @param key Translation key
 * @returns Translated string
 */
export const getTranslation: (lang: Language, key: TranslationKey, params?: Record<string, string>) => string = helperGetTranslation(
	Language.English,
	[Language.English, Language.German],
	translations,
)
