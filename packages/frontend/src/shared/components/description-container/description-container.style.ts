import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesMedium, montserratAlternatesRegular,
} from '../../styles/fonts'

export const TitleContainer = css`
display: flex;
align-items: center;
margin-top: 1.69rem;
`

export const Title = css`
color: #333;
${montserratAlternatesMedium}
font-size: 2rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 0.97rem;
`
export const DescriptionContainers = css`
display: flex;
align-items: center;
margin-top: 2.25rem;
border-radius: 0.3125rem;
background: #F87537;
width: 29.8125rem;
height: 8.125rem;
overflow: hidden;
padding: 0 1.25rem 0 1.25rem;

::before{
    content: '';
    /* background-color: #F87537; */
    z-index: -1;
    position: absolute;
    top: 5.25rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #F87537;
}

& p {
    ${montserratAlternatesRegular}
    color: #FFF;
    text-align: center;
    font-size: 1.25rem;
}
`