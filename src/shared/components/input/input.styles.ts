import {
	css,
} from '@emotion/css'

import {
	spaces,
} from '../../styles/spaces.consts'
import
colors
	from '../../styles/colors.consts'

export const InputContainer = css`
& span {
	margin-top:16px;
	display: block;
}
`

export const labelStyles = css`
font-size: 1.0625rem;
padding-bottom: 8px;
display: block;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const inputStyles = css`
padding: ${spaces.small};
border: 1.5px solid ${colors.blackChocolate};
border-radius: 10px;
margin-top: 5px;
width: 100%;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const errorStyles = css`
color: #FF6262;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0.38rem;
padding-left: 0.5rem;
width: 21.25rem;
@media (max-width: 280px) {
       font-size: 0.6rem;
       width: 100%;
      }
`
export const PasswordInputContainer = css`
display: flex;
width: 100%;
height: 2.8125rem;
padding: 8px 8px;
align-items: center;
gap: 10px;
border-radius: 8px;
color: white;
background: ${colors.black};
@media (max-width: 280px) {
        width: 100%;
      }

& input {
	border: none;
	background: transparent;
	margin-top: 0;
}
& input::-ms-reveal {
	display: none;
}

& input::-ms-reveal {
	display: none;
}

& img {
	margin-right: 10px;
}
`