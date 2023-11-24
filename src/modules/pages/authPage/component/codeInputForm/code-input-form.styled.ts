import {
	css,
} from '@emotion/css'

import
colors
	from '../../../../../shared/styles/colors.consts'

export const ForgotPasswordPage = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${colors.lightBlack};
width: 50%;
height: 100%;
 @media (max-width: 1000px) {
        width: 100%;
      }
& form {
    display: flex;
}
& input {
    display: flex;
    width: 45px;
    height: 2.8125rem;
    padding: 12px 8px;
    align-items: center;
    gap: 10px;
    margin: 0 11px;
    border-radius: 8px;
    border: none;
    color: white;
    background: ${colors.black};
    text-align: center;
    outline: 0;
}

& input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none}
`

export const TitleContainer = css`
display: flex;
align-items: center;
flex-direction: column;
& img {
    width: 42px;
    height: 42px;
    margin-bottom: 8px;
}
& h3 {
    color: ${colors.white};
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 290px) {
       font-size: 20px;
      }
}
`

export const Description = css`
color: ${colors.white};
text-align: center;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 32px 0;
@media (max-width: 290px) {
       font-size: 15px;
      }
`

export const receiveContainer = function(disable?: boolean,): string {
	const hover = disable ?
		`&:hover {
      & span {
        visibility: visible;
      }
    }` :
		''
	return css`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    position: relative;
& p {
    display: block;
    color: var(--black-20, #D0D0D1);
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
& button {
    color: ${colors.white};
    text-align: center;
    background-color: transparent;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
    border: none;
    outline: 0;
    position: relative;
    ${disable && `opacity: 0.7;`}
}

& span {
  visibility: hidden;
  width: 100%;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  bottom: -25px;  
  opacity: 0.5;
  position: absolute;
  z-index: 1;
  font-size: 11px;
}

${hover}

`
}

export const ArrowBatton = css`
 position: fixed;
display: flex;
align-items: center;
padding: 6px 8px;
background-color: transparent;
border: none;
margin: 64px 47.5px 0 32px;
text-decoration: none;
outline: 0;
  @media (max-width: 290px) {
    margin: 75px 50px 0 15px;
      }
& img {
  margin-right: 6px;
}

& p {
  margin: 0;
}

&:hover {
  border-radius: 6px;
  background: ${colors.black};
}
`
export const ErrorMessage = css`
color:  #FF6262;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0.38rem;
padding-left: 0.5rem;
display: flex;
justify-content: center;

@media (max-width: 1000px) {
       width: 100%;
       /* font-size: 0.6rem; */
      }
`