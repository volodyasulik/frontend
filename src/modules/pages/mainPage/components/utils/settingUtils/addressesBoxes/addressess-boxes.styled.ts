import {
	css,
} from '@emotion/css'
import colors from '../../../../../../../shared/styles/colors.consts'
export const AddressesBox = css`
width: 30.0625rem;
min-height: 16rem;
border-radius: 0.5rem;
padding: 0.5rem 0.5rem 0 0.5rem;
background: var(--black-80, #444548);
box-shadow: 0px 4px 20px 0px rgba(44, 45, 49, 0.05);
display: flex;
flex-direction: column;
align-items: center;
`

export const TitleBox = css`
display: flex;
width: 29.0625rem;
padding: 0.375rem;
justify-content: space-between;
align-items: center;
border-bottom: 1px #A1A2A3 solid;
& h4 {
    color: ${colors.white};
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`

export const CopyBox = css`
display: flex;

& p {
font-size: 1.0625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 0.5rem;
}
`

export const SecondTitleBox = css`
display: flex;
width: 29.0625rem;

`

export const SecondTitle = css`
display: block;
color: var(--black-10, #E8E8E8);
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 1rem 0.75rem 1rem 0.38rem;
`

export const AddAddress = css`
display: flex;
width: 29.0625rem;
padding: 0.75rem;
justify-content: center;
align-items: center;
color: var(--White, #FFF);
font-size: 1.0625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
border-radius: 0.5rem;
background: var(--black-90, #2C2D31);
border: 0;
outline: none !important;
margin-top: 1rem;
`

export const RowItem = css`
display: flex;
display: flex;
width: 29.0625rem;
padding: 0.5rem 0.625rem;
justify-content: space-between;
align-items: center;
border-radius: 0.5rem;
background: var(--black-70, #5B5C5F);
margin-bottom: 0.5rem;
`

export const RowLabel = css`
color: var(--White, #FFF);
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

