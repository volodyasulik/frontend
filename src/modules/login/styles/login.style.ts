import {
	css,
} from '@emotion/css'
import colors from '../../../shared/styles/colors.consts'
import {
	montserratAlternatesMedium,
} from '../../../shared/styles/fonts'

export const LoginBox = css`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: ${colors.lightBlack};
opacity: 0.3;
`

export const LoginContainer = css`
width: 38.6875rem;
border-radius: 1.25rem;
padding: 2.5rem 6.25rem 1.25rem 6.25rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: ${colors.black};
`

export const LoginForm = css`
width: 100%;
`

export const LoginInput = css`
width: 100%;
height: 3.4375rem;
border-radius: 3.25rem;
border: 1px solid #FF8D29;
display: flex;
padding: 0 1.56rem;
margin-bottom: 0.63rem;

& input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${colors.white};
    outline: none;
    font-family: ${montserratAlternatesMedium};
    font-size: 1rem;
    font-style: normal;
    line-height: normal;
}

 & input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    background-color: transparent !important;
  }
  & input::placeholder {
    color: ${colors.white};
    font-family: ${montserratAlternatesMedium};
    font-size: 1rem;
    font-style: normal;
    line-height: normal;
  }
`

export const LoginLink = css`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1.25rem;

& p {
    color: ${colors.spaceGrey};
    font-size: 0.875rem;
    font-style: normal;
    ${montserratAlternatesMedium}
    line-height: 1.25rem; 
    margin-bottom: 0;
    & a {
        color: ${colors.orange};
        ${montserratAlternatesMedium}
        font-size: 0.875rem;
        font-style: normal;
        line-height: 1.25rem;
        margin-bottom: 1.25rem;
    }
}
`