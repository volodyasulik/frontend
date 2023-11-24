import {
	css,
} from '@emotion/css'
import colors from '../../../../../../../shared/styles/colors.consts'
export const Box = css`
display: flex;
width: 23.5rem;
height: 4.6875rem;
flex-direction: column;
border-radius: 0.5rem;
background: #2C2D31;
align-items: center;
justify-content: center;
padding: 0.37rem 0.37rem 0 0.37rem;
`
export const InputContainer = css`
display: flex;
justify-content: space-between;
background-color: ${colors.black};
min-width: 15.437rem;
max-width: 15.9375rem;
padding: 0.625rem 0.75rem;
border-radius: 0.625rem;

& input {
    background-color: transparent;
    border: none;
    outline: 0;
    text-decoration: none;
    color: ${colors.white};
    /* font-size: 1.0625rem; */
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

& input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

& input::placeholder {
    color: ${colors.white};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

& div {
    color: var(--black-40, #A1A2A3);
    text-align: right;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`

export const InputsCointainer = css`
display: flex;
`

export const TwoLineContainer = css`
display: flex;
width: 100%;
justify-content: space-between;
`

export const BalanceDescription = css`
color: var(--black-20, #D0D0D1);
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 0.6rem;
margin-top: 0.2rem;
`