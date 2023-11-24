import {
	css,
} from '@emotion/css'
import
colors
	from '../../../../shared/styles/colors.consts'

export const authPage = (): string => {
	return css`
    display: flex;
    width: 100%;
    height: 100vh;
  `
}
export const BackgroundImg = css`
  width: 50%;
  @media (max-width: 1000px) {
        display: none;
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
@media (max-width: 280px) {
       width: 100%;
      }
`

export const SingPage = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${colors.lightBlack};
width: 50%;
& a {
  text-decoration: none;
  outline: none;
}
 @media (max-width: 1000px) {
        width: 100%;
        padding: 0.5rem 1rem;
      }
`

export const TitleContainer = css`
display: flex;
align-items: center;
flex-direction: column;
`

export const SevadaLogoStyle = css`
width: 42px;
height: 42px;
margin-bottom: 8px;
`

export const Title = css`
color: ${colors.white};
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const InputContainer = css`
display: flex;
flex-direction: column;
`
export const FormContainer = css`
& label {
  color: ${colors.white};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 8px;
  margin-top: 32px;
}
 
& a {
    color: ${colors.lightGrey};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    margin-top:10px;
}

& input {
display: flex;
width: 100%;
height: 2.8125rem;
padding: 0.75rem 0.5rem;
align-items: center;
gap: 10px;
border-radius: 8px;
color: white;
background: ${colors.black};
 @media (max-width: 280px) {
        width: 100%;
      }
}

& input:focus {
	outline: none;
  }
& a:hover {
	color: ${colors.lightGrey};
  }
`

export const ButtonsContainer = css`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
align-items: center;
& span {
  color: ${colors.black};
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const SubmitButton = css`
height: 50px;
width: 100%;
display: flex;
padding: 14px 4px;
justify-content: center;
align-items: center;
gap: 6px;
align-self: stretch;
border-radius: 10px;
color: black;
background: ${colors.lightBlue};
border: none;
margin: 32px 0 16px 0;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
@media (max-width: 500px) {
        font-weight: 600;
        font-size: 20px;
      }
`

export const BorderContainer = css`
display: flex;
align-items: center;

& span {
    background-color: ${colors.grey};
    width: 140px;
    height: 1px;
    display: flex;
    @media (max-width: 280px) {
        width: 100px;
      }
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
export const GoogleButton = css`
display: flex;
padding: 11px 30px;
justify-content: center;
align-items: center;
gap: 12px;
align-self: stretch;
border-radius: 10px;
background: ${colors.black};
cursor: pointer;
@media (max-width: 280px) {
        width: 100%;
      }
& img {
    width: 28px;
    height: 28px;
}

& div {
  color: ${colors.white};
/* body 1 */
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width: 280px) {
        font-size: 14px;
      }
}
`

export const ForgotPassword = css`
  color: ${colors.lightGrey};
  /* body 1 */

  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 32px;
   @media (max-width: 280px) {
       font-size: 13px;
        margin-top: 20px;
      }
  & a {
    color: ${colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    @media (max-width: 280px) {
       font-size: 16px;
      }
  }
`