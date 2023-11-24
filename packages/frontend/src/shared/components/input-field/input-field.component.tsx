import * as React from 'react'
import {
	useFormikContext, getIn,
} from 'formik'

import type {
	InputGroupProps,
} from '@blueprintjs/core'
import {
	Label,
} from '@blueprintjs/core'
import {
	errorMessage, inputWrapper, labelStyle,
} from './input-field.styles'

interface IProps extends InputGroupProps {
    label?: string
    name:string,
}

const Input: React.FunctionComponent<IProps> = ({
	label, name , className,...props
},) => {
	const {
		values, handleChange, errors , handleBlur, touched,
	} = useFormikContext<Record<string, string>>()
	const isErrorExists = Boolean(getIn(errors, name,),) && Boolean(touched[name],)
	return <span className={inputWrapper}>
		{Boolean(label,) && <Label className={labelStyle} htmlFor={name}>{label}</Label>}
		<input
			id={name}
			value={values[name] ?? ''}
			onChange={handleChange}
			onBlur={handleBlur}
			className={className}
			{...props}
		/>
		{isErrorExists && <div className={errorMessage}>{errors[name]}</div>}
	</span>
}

export default Input
