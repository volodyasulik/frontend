import * as React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	useFormikContext,
} from 'formik'
import type {
	SelectChangeEvent,
	SelectProps,
} from '@mui/material'
import NativeSelect from '@mui/material/Select'
import {
	iconCss,
	root,
} from './select-type.style'

interface IProps extends SelectProps {
    label?: string
    name: string,
    children?: React.JSX.Element | Array<React.JSX.Element> | string | Array<string>
    defaultValue?: string
    className?: string
    onSelectSelected?: (e: SelectChangeEvent<unknown>,)=>void
}

const Select: React.FunctionComponent<IProps> = ({
	defaultValue,name ,children,className,onSelectSelected,...props
},) => {
	const {
		values, handleChange, handleBlur,
	} = useFormikContext<Record<string, string>>()

	const onSelect = (e: SelectChangeEvent<unknown>,): void => {
		handleChange(e,)
		onSelectSelected?.(e,)
	}

	return <>
		<NativeSelect
			defaultValue={defaultValue}
			name={name}
			onChange={onSelect}
			onBlur={handleBlur}
			value={values[name]}
			className={className}
			IconComponent={ExpandMoreIcon}
			classes={{
				root,
				select:       className,
				icon:         iconCss,
				iconOpen: iconCss,
			}}
			{...props}
		>
			{children}
		</NativeSelect>
	</>
}

export default Select
