import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesLight,
	montserratAlternatesSemibold,
} from '../../styles/fonts'
export const Card = css`
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 4.06rem;
padding-right: 2.06rem;
width: 21.5625rem;
height: 15.1875rem;
margin-top: 1.87rem;
margin-right: 1.87rem;
flex-shrink: 0;
border-radius: 0.875rem;
background: #FFF;
box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);

& img {
    width: 4.375rem;
    height: 4.375rem;
}

& h3 {
    color: #333;
    margin-top: 0.84rem;
    padding-left: 0.12rem;
    ${montserratAlternatesSemibold}
    font-size: 3rem;
    line-height: normal;
}

& p {
    color: #333;
    font-size: 1.25rem;
    ${montserratAlternatesLight}
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
`