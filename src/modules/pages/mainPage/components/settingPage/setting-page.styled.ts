import {
	css,
} from '@emotion/css'
import {
	styled,
} from '@mui/material/styles'
import {
	Switch,
} from '@mui/material'
import colors from '../../../../../shared/styles/colors.consts'
export const SettingPageContainer = css`
background-color: ${colors.lightBlack};
width: 85%;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 2rem;
overflow: scroll;
align-items: center;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

export const TitleUserContainer = css`
flex-direction: column;
& img {
    width: 4rem ;
    height: 4rem ;
}

& span {
    display: flex;
    width: 4rem;
    height: 4rem;
    font-size: 1.61906rem;
}

& h3 {
    margin-top: 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
}
`

export const InputsContainer = css`
display: flex;
justify-content: center;
margin: 1.38rem 0;
`

export const KycControl = css`
display: flex;
width: 45rem;
justify-content: space-between;
margin-right: 1.188rem ;
`

export const SwitchContainer = css`
display: flex;
align-items: center;

& label {
    color: ${colors.white};
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 0.75rem;
    padding-bottom: 2px;
}
`

export const CustomSwitch = styled(Switch,)(({
	theme,
},) => {
	return {
		width:      '2.25rem',
		height:     '1.125rem',
		padding:    0,
		display:    'flex',
		alignItems: 'center',

		'& .MuiSwitch-switchBase': {
			padding:            0,
			margin:             2,
			transform:              'translateX(-2px) translateY(-2px)',
			transitionDuration: '300ms',
			color:              '#A1A2A3',

			'&.Mui-checked': {
				transform:              'translateX(16px) translateY(-2px)',
				color:                  '#03BEFF',
				'& + .MuiSwitch-track': {
					backgroundColor: '#0081AD',
					opacity:         1,
					border:          0,
				},
				'&.Mui-disabled + .MuiSwitch-track': {
					opacity: 0.5,
				},
			},

			'&.Mui-focusVisible .MuiSwitch-thumb': {
				color:  '#33cf4d',
				border: '6px solid #fff',
			},

			'&.Mui-disabled .MuiSwitch-thumb':   {
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: theme.palette.mode === 'light' ?
					0.7 :
					0.3,
			},
		},

		'& .MuiSwitch-thumb': {
			boxSizing: 'border-box',
			width:     '1.125rem',
			height:    '1.125rem',
		},

		'& .MuiSwitch-track': {
			borderRadius:    '26px',
			backgroundColor: '#5B5C5F',
			opacity:         1,
			transition:      theme.transitions.create(['background-color',], {
				duration: 500,
			},),
		},
	}
},)

export const radioButtonsContainer = function(disabled : boolean,): string {
	return css`
display: flex;
${disabled ?
		'' :
		'opacity: 0.3'
}
`
}

export const AddressBoxes = css`
display: flex;
width: 100%;
justify-content: space-evenly;
margin-top: 2.5rem;
`

export const SaveButton = css`
display: flex;
width: 12.75rem;
padding: 0.625rem 0.25rem;
justify-content: center;
align-items: center;
gap: 0.375rem;
border-radius: 0.625rem;
background: var(--black-60, #737376);
color: var(--Black, #15161A);
font-size: 1.125rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 2rem;
border: 0;
`