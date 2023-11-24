import {
	css,
} from '@emotion/css'
import colors from '../../shared/styles/colors.consts'
import {
	interRegular,
} from '../../shared/styles/fonts'

export const formWrapper = css`
    padding: 0 10px;
`
export const submitButton = css`
    display: flex !important;
    width: auto  !important;

    margin: 32px auto 0;
    padding-left: 60px !important;
    padding-right: 60px !important;
`
export const credentialWrapper = css`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-top: 14px;
`
export const credentialField = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    row-gap: 8px;

    padding: 0 8px;

    color: ${colors.white};
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;
`
export const credentialFieldWrapper = css`
    display: grid;
    position: relative;
    width: 100%;
`

export const credentialFieldDescription = css`
    padding: 0 8px;
`

export const credentialFieldValue = css`
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

