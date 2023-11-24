/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type {
	GroupBase,
	OptionProps,
} from 'react-select'

type ComponentData = {
    icon: string,
}

const CustomOption: React.ComponentType<OptionProps<any, false, GroupBase<ComponentData>>> = ({
	innerProps, label, data,
},): React.JSX.Element => {
	return (
		<div {...innerProps} style={{
			display:        'flex',
			alignItems:     'center',
			justifyContent: 'center',
			padding:        '10px',
		}}>
			<img src={data.icon} alt={label} style={{
				width:  '1.5rem',
				height: '1.5rem',
			}} />
			<p style={{
				margin:     '0 0.5rem',
				fontStyle:  'normal',
				fontWeight: 400,
				fontSize:   '1rem',
			}}>{label}</p>
		</div>
	)
}

export default CustomOption