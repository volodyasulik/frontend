import * as React from 'react'
import type {
	FieldValidator,
} from 'final-form'
import {
	Field,
} from 'react-final-form'

import Input from '../input/input.component'

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string
    label?: string
    error?: string | null
    validate?: FieldValidator<string> | undefined
    ref: React.MutableRefObject<HTMLInputElement | null>
    initiaValue?: string,
    type?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FieldProps>(({
	name,
	label,
	validate,
	placeholder,
	initiaValue,
	type,
	...inputAttributes
}, ref,) => {
	return <Field
		name={name}
		validate={validate}
		initialValue={initiaValue}
	>
		{({
			input, meta,
		},): React.ReactNode => {
			return <Input
				name={name}
				input={input}
				error={meta.error}
				label={label}
				placeholder={placeholder}
				{...inputAttributes}
				touched={meta.touched}
				type={type}
				ref={ref}
			/>
		}}
	</Field>
},)

export default FormField