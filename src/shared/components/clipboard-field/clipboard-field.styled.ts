import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import coppyIco from '../../../assets/icons/copyIcon.svg'
import {
	interRegular,
} from '../../styles/fonts'

export const clipboardField = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    row-gap: 8px;

    color: ${colors.white};
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;
`
export const clipboardFieldWrapper = css`
    display: grid;
    position: relative;
    width: 100%;
`

export const clipboardFieldDescription = css`
    padding: 0 8px;
`

export const clipboardFieldValue = css`
    position: relative;
    width: 100%;
    padding: 12px 8px;
    background-color: ${colors.black};
    border-radius:8px;
`
export const copyButton = css`
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    border: none;
    background: transparent;

    outline: none;

    &:focus,&:hover{
    outline: none;
    }

    & svg {
        color:${colors.white};
        &:hover {
            color:${colors.lightBlack};
        }
    }
`

export const icon = css`
        display: flex;
        column-gap: 8px;
        &::before {
            content:'';
            width: 24px;
            height: 24px;

            display: flex;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;

            background: url(${coppyIco});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;}
`
