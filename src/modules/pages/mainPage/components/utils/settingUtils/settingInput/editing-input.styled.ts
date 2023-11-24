import {
	css,
} from '@emotion/css'
import colors from '../../../../../../../shared/styles/colors.consts'

export const InputBox = css`
margin-right: 2rem ;
`
export const inputContainer = function(width = '21.5rem',): string {
	return css`
display: flex;
width: ${width};
height: 2.8125rem;
padding: 0.75rem 0.5rem;
align-items: center;
gap: 10px;
border-radius: 0.5rem;
color: white;
background: ${colors.black};
justify-content: space-between;

& input {
    color: ${colors.white};
	border: none;
	background: transparent;
	margin-top: 0;
    width: 80%;
    outline: 0;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

& img {
	margin-right: 10px;
}
`
}

export const Label = css`
display: block;
color: ${colors.white};
font-size: 1.0625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 0.5rem;
padding-left: 0.5rem;
`