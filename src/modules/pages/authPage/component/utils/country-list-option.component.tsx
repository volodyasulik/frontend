/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type {
	GroupBase,
	OptionProps,
} from 'react-select'

type ComponentData = {
    value: string,
}

const CountryListOption: React.ComponentType<OptionProps<any, false, GroupBase<ComponentData>>> = ({
	innerProps, label, data,
},): React.JSX.Element => {
	return (
		<div {...innerProps} style={{
			display:         'flex',
			alignItems:      'center',
			justifyContent:  'start',
			backgroundColor: '#5B5C5F',
			color:           'white',
			padding:         '12px 8px',
			border:          '1px solid #737376',
		}}>
			<img src={`https://flagsapi.com/${data.value}/flat/64.png`} alt={label} style={{
				width:  '1.5rem',
				height: '1.5rem',
			}} />
			<p style={{
				margin:     '0 0.5rem',
				fontStyle:  'normal',
				fontWeight: 400,
				fontSize:   '1.0625rem',
				color:      'white',
			}}>{label}</p>
		</div>
	)
}

export default CountryListOption