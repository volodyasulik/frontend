import {
	css,
} from '@emotion/css'
import colors from '../../shared/styles/colors.consts'
import editIcon from '../../assets/icons/dashboard/edit.svg'
import {
	interRegular,
} from '../../shared/styles/fonts'

export const formWrapper = css`
    padding: 10px;
`
export const currencySelect = css`
    display: inline-flex!important;
    column-gap: 8px!important;

    & span:first {
        width: 24px !important;
    }

    color: ${colors.white} !important;
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;
    
    border: none !important;
    border-radius: 10px !important;
    padding: 6px 4px !important;
    background-color: ${colors.lightBlack} !important;
`

export const ibanInput = css`
    position: relative;
    margin-top: 14px;
`

export const ibanInputButton = css`
    border: none;
    position: absolute;
    top: 40px;
    right: 11px;

    width: 24px;
    height: 24px;

    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;

    mask-image: url(${editIcon});
    background: ${colors.white};
    mask-repeat: no-repeat;
    mask-position: center;
`

export const ibanSelectWrapper = css`
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    margin-top: 12px;

    &>span {
        display: grid;
        grid-template-columns:1fr 100px 1fr ;
        align-items: center;

        text-align: center;
        font-size: 14px;
        ${interRegular};
        color:${colors.grey};

        &::before, &::after {
            content: '';
            height: 1px;
            background-color: ${colors.grey};
        }
    }


    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${colors.grey};
    }
`

export const inputsWrapper = css`
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    margin-top: 12px;
`

export const submitButton = css`
    display: flex !important;
    width: auto  !important;

    margin: 32px auto 0;
    padding-left: 60px !important;
    padding-right: 60px !important;
`