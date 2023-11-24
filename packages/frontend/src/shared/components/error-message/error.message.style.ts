import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesRegular,
} from '../../styles/fonts'
import colors from '../../styles/colors.consts'

export const ErrorMessageStyle = css`
${montserratAlternatesRegular}
margin-left: 0.8rem;
& p {
    color: ${colors.lightRed};
}
`