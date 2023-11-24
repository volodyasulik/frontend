import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesBold,
} from '../../../shared/styles/fonts'

export const LovelyCashbackSection = css`
min-height: 55rem;
padding-left: 7.25rem;
padding-right: 7.25rem;
`

export const Content = css`
display: flex;
justify-content: space-between;
margin-top: 6.25rem;
`
export const ContentText = css`
width: 48.25rem;

& h1 {
    color: #FFF;
    font-size: 4rem;
    font-style: normal;
    ${montserratAlternatesBold}
    line-height: normal;
    margin-bottom: 1.56rem !important;

    & span {
        color: #60F;
    }
}

& p {
    display: block;
    color: #FFF;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`

export const ContentImg = css`
width: 24.94256rem;
height: 45.5625rem;
`