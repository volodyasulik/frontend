import {
	css,
} from '@emotion/css'
import
colors
	from '../../../../../shared/styles/colors.consts'

export const DateInputContainer = css`
display: flex;
background-color: ${colors.black};
border-radius: 8px;
align-items: center;
width: 21.5rem;
height: 2.8125rem;
padding: 12px 8px;
margin-top: 13px;
 @media (max-width: 500px) {
        width: 100%;
      }
& span {
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-40, #A1A2A3);
    padding-bottom: 4px;
    @media (max-width: 500px) {
        font-size: 15px;
      }
}
& input {
    background-color: transparent;
    display: flex;
    width: 30px !important;
    align-items: center;
    gap: 10px;
    margin: 0 11px;
    border-radius: 8px;
    border: none;
    color: white;
    text-align: center;
    outline: 0;
    margin: 0;
    padding: 0;
     font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 4px;
}

& input:last-child {
    width: 45px !important;
}

& input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none}
`