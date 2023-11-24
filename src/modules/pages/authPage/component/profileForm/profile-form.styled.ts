import {
	css,
} from '@emotion/css'

import
colors
	from '../../../../../shared/styles/colors.consts'

export const ProfileFormContainer = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
& label {
  color: ${colors.white};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 8px;
  margin-top: 32px;
  }                

& input {
  display: flex;
  width: 21.5rem;
  height: 2.8125rem;
  padding: 0.75rem 0.5rem;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: ${colors.white};
  background: ${colors.black};
   @media (max-width: 1000px) {
        width: 100%;
      }
}
`

export const TittleContainer = css`
display: flex;
align-items: center;
flex-direction: column;
 @media (max-width: 500px) {
        flex-direction: row;
      }
& img {
    width: 2.625rem;
    height: 2.625rem;
    margin-bottom: 0.5rem;
    @media (max-width: 500px) {
        margin-bottom: 0;
        margin-right: 0.5rem;
      }
}

& h2 {
  color: ${colors.white};
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 500px) {
        font-size: 18px;
        width: 110px;
      }
}
`

export const ProfileInfoContainer = css`
display: flex;
justify-content: center;
background-color: ${colors.lightBlack};
width: 50%;
 @media (max-width: 1000px) {
        width: 100%;
        padding: 0.5rem 1rem;
      }
      
       @media (max-width: 290px) {
        height: 120vh;
      }
& button {
  text-decoration: none;
  outline: none;
}
`

export const ArrowBatton = css`
 position: fixed;
display: flex;
align-items: center;
padding: 6px 8px;
background-color: transparent;
border: none;
margin: 64px 47.5px 0 32px;
text-decoration: none;
outline: none;
@media (max-width: 500px) {
    margin: 79px 47.5px 0 8px;
    }
    @media (max-width: 290px) {
       margin: 45px 0 0px -2px;
       position: absolute;
      }
& img {
  margin-right: 6px;
   @media (max-width: 290px) {
      width: 15px;
      height: 20px;
      margin-right: 2px;
      }
}

& p {
  margin: 0;
  @media (max-width: 290px) {
      font-size: 10px;
      }
}

&:hover {
  border-radius: 6px;
  background: ${colors.black};
}
`