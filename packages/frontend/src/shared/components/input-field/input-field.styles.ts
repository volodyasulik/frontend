import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interRegular,
} from '../../styles/fonts'

export const inputWrapper = css`
    display: grid;
    flex-grow: 1;
`

export const labelStyle = css`
    margin: 0 0 8px 8px !important;
    color: ${colors.white};
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;
`

export const errorMessage = css`
    color:${colors.americanRed};
    &::first-letter {
        text-transform: uppercase !important;
    }
`