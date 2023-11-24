import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesRegular, montserratAlternatesSemibold,
} from '../../styles/fonts'

export const ReviewContainer = css`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0 1.56rem 0 1.56rem;
width: 25rem;
height: 24.25rem;
background: #FFF;
box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);

& p {
    color: #333;
    text-align: center;
    ${montserratAlternatesRegular}
    font-size: 1.5rem;
    line-height: normal;
}

& img {
    width: 4.25rem;
    height: 2.79288rem; 
}

& span {
    width: 4.8125rem;
    height: 0.125rem;
    background: #333;
    /* padding: 0 1.25rem 0 1.25rem; */
}
`

export const WhoContainer = css`
display: flex;
flex-direction: column;
align-items: center;
& img {
    width: 3.75rem;
    height: 3.75rem;
}

& h4 {
    color: #333;
    text-align: center;
    margin-top: 0.31rem;
    ${montserratAlternatesSemibold}
    font-size: 1.5rem;
    line-height: normal;
}
`