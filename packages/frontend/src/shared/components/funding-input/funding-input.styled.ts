import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interRegular,
} from '../../styles/fonts'

export const input = css`
    width: 100%;

    padding: 12px 8px;

    color: ${colors.white};
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;

    border: none;
    border-radius: 10px;
    background-color: ${colors.black};

    & :-internal-autofill-selected {
        background-color: ${colors.black};
    }
`