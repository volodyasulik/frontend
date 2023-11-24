import {
	css,
} from '@emotion/css'
import colors from '../../../../../../../shared/styles/colors.consts'

export const fundingModalContainer = function(height: string,): string {
	return css`
padding: 0;
height: ${height};
`
}
export const ArrowImg = css`
width: 1.5rem;
height: 1.5rem;
`

export const FundingTitle = css`
& h3{
    padding-left: 14px ;
}
`

export const FundingButtons = css`
display: flex;
margin-bottom: 0.87rem;
`

export const fundingButton = function(active: boolean,): string {
	return css`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 2.5rem;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
color: #FFF;
border-bottom: ${active ?
		'0.125rem solid #03BEFF' :
		'none'};
background:  ${active ?
		'#2C2D31' :
		'#5B5C5F'};
`
}

export const SelectCurrency = css`
    display: flex;
width: 23.5rem;
padding: 0.75rem 0.875rem;
align-items: center;
border-radius: 0.5rem;
background:  #2C2D31;
margin-bottom: 0.75rem;

& img {
    margin-right: 0.88rem;
}

`

export const OperationButtonContainer = css`
width:100%; 
height: 100%;
display:flex;
justify-content: center;
`

export const IBANInputContainer = css`
width: 100%;
padding: 0 0.63rem;

& label {
    color: ${colors.white};
    padding-left: 0.5rem;
    margin-top: 1rem;
}
`

export const BorderContainer = css`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0.75rem 0;

& span {
    background-color: ${colors.grey};
    width: 8.75rem;
    height: 1px;
    display: flex;
}
& div {
    color: ${colors.grey};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 17px 0 17px;
}
`

export const TransactionInformationFormContainer = css`
width: 100%;
padding: 0 0.63rem;

& label {
    color: var(--White, #FFF);
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0 0.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
}

& input {
    height: 2.8125rem;
    background-color: ${colors.black};
}

& span {
    margin-top: 0.75rem;
    background-color: ${colors.grey};
    width: 100%;
    height: 1px;
    display: flex;
}
`