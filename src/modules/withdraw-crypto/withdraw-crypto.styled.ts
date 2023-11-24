import {
	css,
} from '@emotion/css'
import colors from '../../shared/styles/colors.consts'
import editIcon from '../../assets/icons/dashboard/edit.svg'
import {
	interRegular,
} from '../../shared/styles/fonts'

export const formWrapper = css`
    padding: 6px;
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

export const addressInput = css`
    position: relative;
    margin-top: 14px;

    & input {
        padding-right: 75px;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
    }
`

export const currencySelectedValue = css`
    max-width: 300px;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    overflow: hidden;
`
export const networkSelect = css`
    margin-top: 14px;
    padding: 0;
    display: flex!important;
    flex-direction: column;
    row-gap: 4px;
    height: 56px;
  
    color: ${colors.white} !important;
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;
    
    border: none !important;
    background-color: ${colors.lightBlack} !important;

    & span:first {
        width: 24px !important;
    }
    box-sizing: border-box !important;
    flex-grow: 0 !important;

    & div {
        display: flex;
        padding: 0;
        border-radius:0;
    }

    &:first-child:before {
        content: 'Network';
        font-size: 14px;
        line-height:1;
        color: ${colors.lightGrey}
    }
`

export const currencyInputButton = css`

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

export const currencySelectWrapper = css`
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