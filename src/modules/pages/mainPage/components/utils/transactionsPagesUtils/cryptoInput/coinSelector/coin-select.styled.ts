/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type {
	ThemeConfig,
} from 'react-select'
import colors from '../../../../../../../../shared/styles/colors.consts'

type CustomStyles = Record<string, (provided: any) => object>;

export const customTheme: ThemeConfig = {
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

export const customStyles = (isSelected: boolean,): CustomStyles => {
	return {
		control: (provided,) => {
			return {
				...provided,
				backgroundColor: isSelected ?
					colors.black :
					'#0081AD',
				color:        'white',
				width:        'auto',
				height:       '2.5rem',
				borderRadius: '0.625rem',
				border:       0,
				padding:      '0.5rem',
				display:      'flex',
				alignItems:   'center',
				marginLeft:   '0.38rem',
				cursor:       'pointer',
				boxShadow:    'none',
			}
		},
		valueContainer: (provided,) => {
			return {
				...provided,
				display:         'flex',
			}
		},
		option:         (provided,) => {
			return {
				...provided,
				backgroundColor: colors.black,
				color:           'white',
				padding:         '12px 8px',
				border:          colors.black,
				': first-child': {
					borderRadius: '8px 8px 0 0;',
				},
				': last-child': {
					borderRadius: '0 0 8px 8px;',
				},
			}
		},
		menuList: (base,) => {
			return {
				...base,
				marginTop:             '5px',
				height:                'auto',
				borderRadius:          '8px',
				marginLeft:            5,
				border:                0,
				backgroundColor:       '#15161A',
				'::-webkit-scrollbar': {
					width:  '0px',
					height: '0px',
				},
			}
		},
		placeholder: (provider,) => {
			return {
				...provider,
				fontSize:   '0.875rem',
				fontStyle:  'normal',
				fontWeight: 400,
				lineHeight: 'normal',
			}
		},
	}
}