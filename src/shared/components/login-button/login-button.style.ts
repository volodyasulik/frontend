import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	montserratAlternatesMedium,
} from '../../styles/fonts'

export const Button = css`
height: 3.4375rem;
width: 100%;
border-radius: 3.25rem;
border: 1px solid ${colors.orange};
background: ${colors.orange};
color: #FFF;
${montserratAlternatesMedium}
text-align: center;
font-size: 1rem;
font-style: normal;
line-height: normal;
margin-bottom: 0.63rem;

 &:focus {
    outline: none;
  }
`