import {
	css,
} from '@emotion/css'
import type {
	ThemeConfig,
} from 'react-select'

export const Label = css`
display: block;
color: #fff;
padding-bottom: 8px;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 8px;
    margin-top: 32px;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomStyles = Record<string, (provided: any) => object>;

export const customStyles: CustomStyles = {
	control: (provided,) => {
		return {
			...provided,
			marginTop:                    '5px',
			backgroundColor:              '#444548',
			color:                        'white',
			width:                        '21.5rem',
			height:                       '45px',
			borderRadius:                 '8px',
			border:                       'none',
			padding:                      '0 8px',
			display:                      'flex',
			alignItems:                   'center',
			zIndex:                       9999,
			boxShadow:                    0,
			'@media (max-width: 1000px)': {
				width: '100%',
			},
		}
	},
	input: (provided,) => {
		return {
			...provided,
			padding:   '0 8px',
			margin:    '0',
			outline:   '0',
			border:    'none',
		}
	},

	menuList: (base,) => {
		return {
			...base,
			height:                '143px',
			width:                 '21.5rem',
			borderRadius:          '8px',
			'::-webkit-scrollbar': {
				width:  '0px',
				height: '0px',
			},

		}
	},
}

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

export const ErrorMessage = css`
color:  #FF6262;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0.38rem;
padding-left: 0.5rem;

@media (max-width: 1000px) {
       width: 100%;
       /* font-size: 0.6rem; */
      }
`