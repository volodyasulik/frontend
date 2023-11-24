import {
	css,
} from '@emotion/css'
import colors from '../../shared/styles/colors.consts'
import {
	interNormal,
	interRegular,
} from '../../shared/styles/fonts'

export const sidebar = css`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;

    min-width: 237px;

    padding: 30px 16px 16px 32px;

    background-color: ${colors.lightBlack};
`

export const header = css`
    display: flex;
    align-items: center;
    gap: 10px;

    ${interRegular};
    color: ${colors.white};
    font-size: 17px;
    font-style: normal;
    line-height: normal;

    &:hover, &:focus {
        text-decoration: none;
        outline: none;
        color: ${colors.white};
    }

    & div {
        width: 42px;
        height: 42px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        background-color: ${colors.black};

        text-transform: uppercase;
    }

    & p {
        color: inherit;
    }
`

export const mainNav = css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    margin: 26px 0 53px;
`
export const mainNavList = css`
    list-style: none;
    display: grid;
    gap: 10px;
`
export const mainNavItem = (image:string,): string => {
	return css`
    display: flex;
    align-items: center;
    column-gap: 6px;

    padding: 6px 4px;

    ${interNormal};
    font-size: 18px;
    font-style: normal;
    color: ${colors.white};

    border-radius: 6px;
    outline: none;
    cursor: pointer;

    &::before {
        content:'';
        width: 32px;
        height: 32px;

        display: flex;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;

        mask-image: url(${image});
        background: ${colors.white};
        mask-repeat: no-repeat;
        mask-position: center;
    };

    &:hover, &:focus{
        background-color: ${colors.black};
        color: ${colors.white};
        text-decoration: none;
        outline: none;
    }
`
}
export const mainNavItemActive = css`
    border-radius: 6px;
    background-color: ${colors.black};
    outline: none;
    color: ${colors.white};
`

export const buttonsList = css`
    list-style: none;
    display: grid;
    gap: 6px;
`
export const buttonsListItem = css`
    width: 100%;
`
export const sidebarLogo = css`
    &:hover, &:focus {
            outline: none;
        }
`