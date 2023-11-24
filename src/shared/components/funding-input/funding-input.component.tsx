import React from 'react'
import Input from '../input-field/input-field.component'
import type {
	InputGroupProps,
} from '@blueprintjs/core'
import {
	input,
} from './funding-input.styled'
import {
	classBuilder,
} from '../../utils/class-builder.util'

interface IProps extends InputGroupProps {
    label: string
    name: string
    required?: boolean
    placeholder?: string
    readOnly?: boolean
}

const FundingInput: React.FC<IProps> = ({
	name,label,type, required = true,placeholder, readOnly = false,...other
},) => {
	return		<Input
		label={label}
		className={classBuilder([input,],) }
		required={required}
		type={type}
		name={name}
		readOnly={readOnly}
		placeholder={placeholder}
		{...other}
	/>
}
export default FundingInput
