import {
	css,
} from '@emotion/css'
import colors from '../../../../../../../shared/styles/colors.consts'
export const ChangePasswordContainer = css`
display: flex;
justify-content: space-between;
width: 45rem;
height: 3.125rem;
border-radius: 0.5rem;
background:  #444548;
padding: 0 0.87rem; 
margin-bottom: 1.38rem;
margin-right: 2.188rem ;

& button {
    background-color: transparent;
    color: ${colors.white};
    border: 0;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    outline: 0;
}
`

export const IconAndDivContainer = css`
display: flex;
align-items: center;

& p {
    margin-left: 0.62rem;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal
}
`