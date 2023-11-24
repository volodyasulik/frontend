import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interBold,
} from '../../styles/fonts'

export const cardBody = css`
    position: relative;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    max-width: 396px;
    padding: 14px 0;

    border-radius: 12px;

    background-color: ${colors.outerSpace};
    box-shadow: 0px 4px 20px 0px rgba(44, 45, 49, 0.05);
`

export const cardTitle = css`
    text-transform: capitalize;
    padding-left: 14px;

    color: ${colors.white};
    ${interBold};
    font-size: 20px;
    line-height: normal;
`