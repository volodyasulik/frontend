import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesMedium,
} from '../../styles/fonts'
import colors from '../../styles/colors.consts'
export const input = css`
    width: 100%;

    padding: 0 1.56rem;

    color: ${colors.white};
    ${montserratAlternatesMedium};
    font-size: 17px;
    font-style: normal;
    line-height: normal;

    border: none;
    border-radius: 3.25rem;
    background-color: ${colors.orange};

    & :-internal-autofill-selected {
        background-color: ${colors.black};
    }
`