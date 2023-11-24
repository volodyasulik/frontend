import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interNormal,
} from '../../styles/fonts'

export const container = css`
    display: grid;
    padding: 14px 10px;
    row-gap: 12px;
`

export const navLink = css`
    position: relative;

    display: flex;
    align-items: center;
    column-gap: 14px;

    ${interNormal};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${colors.white};

    padding: 12px 14px;

    border-radius: 8px;    
    background-color: ${colors.lightBlack};

    &:hover, &:focus {
        outline: none;
        text-decoration: none;
        color:${colors.white};

        &::before{
            border-color:${colors.lightBlue};
        }
    };

    &::before {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;

        border: 2px solid ${colors.grey};
    };

    &::after {
        position: absolute;
        left: 19px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${colors.grey};
    };

`
export const navLinkActive = css`
    &::before {
        border-color:${colors.lightBlue};
    };

    &::after {
        content: '';
        background-color: ${colors.lightBlue};
    };
`