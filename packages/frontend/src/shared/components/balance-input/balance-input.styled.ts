import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	interRegular,
} from '../../styles/fonts'

export const currencyWrapper = css`
    padding: 6px;
    background-color: ${colors.lightBlack};
    border-radius: 8px;
`

export const currencyValue = css`
    display: flex;
    column-gap: 6px;
    align-items:flex-start;
`

export const amountInput = css`
    width: 100%;

    padding: 10px 12px;

    color: ${colors.white};
    ${interRegular};
    font-size: 17px;
    font-style: normal;
    line-height: normal;

    border: none;
    border-radius: 10px;
    background-color: ${colors.black};
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

    padding: 0!important;

    background-color: ${colors.black} !important;
`

export const balance = css`
    margin-top: 8px;

    text-align: end;
    color: ${colors.lightGrey};
    ${interRegular};
    font-size: 12px;
    font-style: normal;
    line-height: normal;
`

export const icon = (url?:string,):string => {
	return css`
        display: flex;
        column-gap: 8px;
        padding-right: 29px;
        &::before {
            ${url ?
		'content:""' :
		''};
            width: 24px;
            height: 24px;

            display: flex;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;

            background: url(${url});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
`
}
