import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesMedium,
	montserratAlternatesRegular,
} from '../../../shared/styles/fonts'
import colors from '../../../shared/styles/colors.consts'

export const BorderContainer = css`
display: flex;
align-items: center;
margin: 1.25rem 0;

& span {
    width: 4.9375rem;
    height: 0.0625rem;
    background: ${colors.darkGrey};
}

& p {
    color: ${colors.grey};
    text-align: center;
    ${montserratAlternatesRegular}
    font-size: 1rem;
    font-style: normal;
    line-height: normal;
    margin: 0 0.62rem 0 0.62rem;
}
`

export const Title = css`
color: ${colors.white};
${montserratAlternatesMedium}
font-size: 2rem;
font-style: normal;
line-height: normal;
`