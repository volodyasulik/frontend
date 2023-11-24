import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interNormal,
} from '../../styles/fonts'

export const navContainer = css`
    display: flex;
    width: 100%;
`

export const navLink = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;

    flex-grow:1;
    margin-top: 11px;

    color:${colors.white};
    font-size: 16px;
    ${interNormal};
    font-style: normal;
    line-height: normal;

    background-color: ${colors.davysGrey};

    border-bottom: 2px solid ${colors.davysGrey};

    &:hover, &:focus {
        outline: none;
        text-decoration: none;
        color:${colors.white};
        border-bottom: 2px solid ${colors.lightBlue};
    };
`

export const navLinkActive = css`
    background-color: ${colors.lightBlack};
    border-bottom: 2px solid ${colors.lightBlue};
`