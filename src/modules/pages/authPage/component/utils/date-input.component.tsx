import React, {
	useEffect,
} from 'react'
import {
	useRef,
} from 'react'
import {
	DateInputContainer,
} from './date-input.styled'

const DateInput: React.FC<{
    setDate: (date: string) => void,
    initialValue: Array<number> | undefined
}> = ({
	setDate, initialValue,
},) => {
	const input1Ref = useRef(null,)
	const input2Ref = useRef(null,)
	const input3Ref = useRef(null,)

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		latestInputRef: React.MutableRefObject<null | string>,
		nextInputRef: React.MutableRefObject<null | string>,
	): void => {
		const inputValue = event.target.value
		event.preventDefault()
		if (inputValue.length === 0 && nextInputRef.current) {
			(latestInputRef.current as unknown as HTMLInputElement).focus()
		} else if (inputValue.length === 2 && nextInputRef.current) {
			(nextInputRef.current as unknown as HTMLInputElement).focus()
		}
		updateDate()
	}

	const updateDate = (): void => {
		const inputDate = `${(input1Ref.current as unknown as HTMLInputElement).value}/${(input2Ref.current as unknown as HTMLInputElement).value}/${(input3Ref.current as unknown as HTMLInputElement).value}`
		setDate(inputDate,)
	}
	useEffect((): void => {
		if (initialValue) {
			(input1Ref.current as unknown as HTMLInputElement).value = `${initialValue[0]}`
		}
		if (initialValue) {
			(input2Ref.current as unknown as HTMLInputElement).value = `${initialValue[1]}`
		}
		if (initialValue) {
			(input3Ref.current as unknown as HTMLInputElement).value = `${initialValue[2]}`
		}
		updateDate()
	},[initialValue,],)
	return (
		<>
			<label>Date of Birth</label>
			<div className={DateInputContainer}>
				<input
					type='text'
					ref={input1Ref}
					onChange={(event,): void => {
						handleInputChange(event, input1Ref, input2Ref,)
					}}
					placeholder='DD'
					maxLength={2} />
				<span>/</span>
				<input
					type='text'
					ref={input2Ref}
					onChange={(event,): void => {
						handleInputChange(event, input1Ref, input3Ref,)
					}}
					placeholder='MM'
					maxLength={2} />
				<span>/</span>
				<input
					type='text'
					ref={input3Ref}
					onChange={(event,): void => {
						handleInputChange(event, input2Ref, input3Ref,)
					}}
					placeholder='YYYY'
					maxLength={4} />
			</div>
		</>
	)
}

export default DateInput

