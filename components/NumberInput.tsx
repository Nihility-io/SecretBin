import classNames from "classnames"
import { Icon } from "components"
import { BaseProps, elementID } from "./helpers.ts"

interface NumberButtonProps {
	/** ID of the number input */
	inputId: string

	/** Button mode */
	mode: "+" | "-"

	/** Disables the button */
	disabled?: boolean

	/** Function called when the button is clicked */
	onClick: () => void
}
/** Helper element for incrementing or decrementing the number */
const NumberButton = ({ inputId, mode, disabled, onClick }: NumberButtonProps) => (
	<button
		type="button"
		data-input-counter-decrement={inputId}
		class={classNames(
			"bg-gray-100 dark:bg-gray-700 dark:border-gray-600 border border-gray-300 p-3 h-11",
			{
				"rounded-s-lg": mode === "-",
				"rounded-e-lg": mode === "+",
				"hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none":
					!disabled,
				"bg-white dark:bg-gray-800": disabled,
			},
		)}
		disabled={disabled}
		onClick={onClick}
	>
		{mode === "+"
			? <Icon.PlusOutline class="w-4 h-4 text-gray-900 dark:text-white" />
			: <Icon.MinusOutline class="w-4 h-4 text-gray-900 dark:text-white" />}
	</button>
)

export interface NumberInputProps extends BaseProps {
	/** Element ID (Default: Random ID) */
	id?: string

	/** Optional minimum value */
	min?: number

	/** Optional maximum value */
	max?: number

	/**
	 * Size of increments and decrements when click the respective button (Default: 1)
	 */
	step?: number

	/** Current value */
	value: number

	/** Function called when the number changed */
	onChange?: (value: number) => void
}

/**
 * Creates a number input field with increment and decrement buttons
 */
export const NumberInput = ({ id, value, min, max, step = 1, onChange, ...props }: NumberInputProps) => {
	const elemId = elementID("number", id)

	const setNumber = (n: number) =>
		(min === undefined || n >= min) && (max === undefined || n <= max) && (n % step === 0)
			? onChange?.(n)
			: onChange?.(value)

	return (
		<div style={props.style} class={classNames("relative flex items-center max-w-[8rem]", props.class)}>
			<NumberButton
				inputId={elemId}
				mode="-"
				disabled={min !== undefined && value <= min}
				onClick={() => setNumber(value - 1)}
			/>
			<input
				type="text"
				id={elemId}
				data-input-counter
				aria-describedby="helper-text-explanation"
				class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				value={"" + value}
				step={step}
				min={min}
				max={max}
				onInput={(e) => setNumber(+e.currentTarget.value)}
			/>
			<NumberButton
				inputId={elemId}
				mode="+"
				disabled={max !== undefined && value >= max}
				onClick={() => setNumber(value + 1)}
			/>
		</div>
	)
}
