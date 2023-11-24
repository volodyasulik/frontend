import {
	css,
} from '@emotion/css'
import colors from '../../styles/colors.consts'
import {
	montserratAlternatesMedium,
} from '../../styles/fonts'

export const Container = css`
width: 100%;
height: 3.4375rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3.25rem;
border: 1px solid ${colors.orange};
margin-bottom: 0.62rem;
text-decoration: none;
color: inherit;
outline: none !important;

:hover {
  text-decoration: none;
}

& img {
    width: 2.125rem;
    height: 2.125rem;
    padding: 0.30988rem;
    flex-shrink: 0;
    margin-left: 0.94rem;
}

& p {
    color: ${colors.white};
    ${montserratAlternatesMedium}
    font-size: 1rem;
    font-style: normal;
    line-height: normal;
    margin: 0;
}
`