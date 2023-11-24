/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type {
	ThemeConfig,
} from 'react-select'
import Select from 'react-select'

type CustomStyles = Record<string, (provided: any) => object>;

const customStyles: CustomStyles = {
	control: (provided,) => {
		return {
			...provided,
			marginTop:       '5px',
			backgroundColor: '#2C2D31',
			color:           'white',
			width:           '100%',
			height:          '45px',
			borderRadius:    '8px',
			border:          'none',
			padding:         '0 8px',
			display:         'flex',
			alignItems:      'center',
			boxShadow:       'none',

		}
	},
	option: (provided,) => {
		return {
			...provided,
			backgroundColor: '#2C2D31',
			color:           'white',
			padding:         '12px 8px',
			border:          '1px solid #737376',
			': first-child': {
				borderRadius: '8px 8px 0 0;',
			},
			': last-child': {
				borderRadius: '0 0 8px 8px;',
			},
		}
	},
	input: (provided,) => {
		return {
			...provided,
			margin:    '0',
			outline:   '0',
			border:    'none',
			': focus': {
				outline: '0',
				border:  'none',
			},
		}
	},

	menuList: (base,) => {
		return {
			...base,
			borderRadius:          '0.5rem',
			marginTop:                0,
			'::-webkit-scrollbar': {
				width:  '0px',
				height: '0px',
			},
		}
	},
	placeholder: (provider,) => {
		return {
			...provider,
			fontSize:   '1.0625rem',
			fontStyle:  'normal',
			fontWeight: 400,
			lineHeight: 'normal',
		}
	},
}

const customTheme: ThemeConfig = {
	colors: {
		primary:     'white',
		primary75:   '',
		primary50:   '',
		primary25:   '',
		danger:      '',
		dangerLight: '',
		neutral0:    '',
		neutral5:    '',
		neutral10:   '',
		neutral20:   '',
		neutral30:   '',
		neutral40:   '',
		neutral50:   '',
		neutral60:   '',
		neutral70:   '',
		neutral80:   '',
		neutral90:   '',
	},
	borderRadius: 8,
	spacing:      {
		baseUnit:      0,
		controlHeight: 0,
		menuGutter:    0,
	},
}

interface ISelect {
	value: string;
	label: string
}

const IBANSelect: React.FC<{ setIBAN: (options: any) => void, value:string | ISelect }> = ({
	setIBAN, value,
},) => {
	const options = [{
		label: '08923429018390128239021830912812WEA',
		value: '08923429018390128239021830912812WEA',
	},]
	return (
		<div>
			<Select
				styles={customStyles}
				theme={customTheme}
				options={options}
				value={value}
				placeholder='Select from Saved IBAN Address'

				onChange={(selectedOption: any,):void => {
					setIBAN(selectedOption,)
				}}
			/>
		</div>
	)
}

export default IBANSelect
