/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const CustomSingleValue: React.ComponentType<any> = ({
	innerProps, data,
},): React.JSX.Element => {
	return (
		<div {...innerProps} style={{
			display:        'flex',
			alignItems:     'center',
			justifyContent: 'center',

		}}>
			<img style={{
				width:  '1.5rem',
				height: '1.5rem',
			}} src={data.icon} alt={data.label} />
			<p style={{
				margin:     '0 0.5rem',
				fontStyle:  'normal',
				fontWeight: 400,
				fontSize:   '1rem',
			}}>{data.label}</p>
		</div>
	)
}

export default CustomSingleValue