/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-negated-condition */
/* eslint-disable complexity */
import * as React from 'react'
import classNames from 'classnames'

import {
	errorStyles,
	inputStyles,
	labelStyles,
	InputContainer,
	PasswordInputContainer,
} from './input.styles'

interface IInputProps {
	name?: string
	label?: string
	input?: React.InputHTMLAttributes<HTMLInputElement>
	error?: string
	touched?: boolean;
	placeholder?: string;
    type?: string
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(({
	name,
	label,
	input,
	error,
	touched,
	placeholder,
	type = 'text',
	onBlur,
	onChange,
}, ref,) => {
	// const [showPassword, setShowPassword,] = React.useState(false,)
	const isError = Boolean(error,) && Boolean(touched,)
	// const changeVisiblePasswordHandler = () => {
	// 	setShowPassword(!showPassword,)
	// }
	return (
		<div className={InputContainer}>
			{label ?
				<label className={labelStyles} htmlFor={name}>
					{label}
				</label> :
				<span></span>}
			<div className={type === 'password' ?
				PasswordInputContainer :
				''}>

				<input
					type={type}
					ref={ref}
					id={name}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					className={classNames(inputStyles, input?.className,)}
					{...input}
				/>
				{/* {type === 'password' && (<div onClick={changeVisiblePasswordHandler}>
					{!showPassword ?
						<img src={VisibleOffIcon} alt='VisibleOff Icon' /> :
						<img src={VisibleIcon} alt='Visible Icon' />}
				</div>)} */}
			</div>

			{isError && <p role='alert' className={errorStyles}>{error}</p>}
		</div>
	)
},)

export default Input
