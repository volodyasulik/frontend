import {
	css,
} from '@emotion/css'
import FrameBg from '../../../assets/bg/frage4-bg.image.svg'
import {
	montserratAlternatesBold,
	montserratAlternatesMedium,
	montserratAlternatesRegular,
} from '../../../shared/styles/fonts'

export const FooterContainer = css`
background: url(${FrameBg}) no-repeat center center;
background-size: cover;
padding: 6.25rem 7.25rem 0 7.25rem;
height: 51.1875rem;

& span {
    margin-top: 7.81rem;
    margin-bottom: 1.56rem;
    display: block;
    width: 100%;
    height: 0.25rem;
    border-radius: 0.1875rem;
    background: #D9D9D9;
}
`

export const ContactInfoContainer = css`
display: flex;
justify-content: space-between;

& h2 {
    color: #FFF;
    ${montserratAlternatesBold}
    font-size: 3rem;
    font-style: normal;
    line-height: normal;
    margin-bottom: 1.56rem;
}
`
export const IconContainers = css`
background-color: #fff;
width: 3.125rem;
height: 3.125rem;

& img {
    width: 1.5rem;
    height: 1.5rem;
}
`

export const SocialMediasContainer = css`
display: flex;
`

export const SocialMedias = css`
background-color: #fff;
width: 2.5625rem;
height: 2.5625rem;
margin-right: 1.56rem;

& img {
   width: 1.25rem;
    height: 1.25rem;
}
`

export const SayHelloContainer = css`
display: flex;
align-items: center;
margin-bottom: 1.25rem;

& p {
    color: #FFF;
    ${montserratAlternatesRegular}
    font-size: 1.5rem;
    font-style: normal;
    line-height: normal;
    margin-left: 0.97rem;
}
`

export const NomoCashback = css`
color: #FFF;
font-size: 1.5rem;
${montserratAlternatesMedium}
line-height: normal;
`