import {
	css,
} from '@emotion/css'
import {
	montserratAlternatesBold, montserratAlternatesMedium, montserratAlternatesRegular,
} from '../../../shared/styles/fonts'

export const SectionOtherStyle = css`
display: flex;
justify-content: space-between;
padding: 11rem 7.25rem 7.25rem;
`

export const WhoWeAreContainer = css`
& h2 {
    color: #333;
    ${montserratAlternatesBold}
    font-size: 3rem;
    line-height: normal;
    margin-top: 1.56rem;
    margin-bottom: 1.56rem;
}

& p {
    color: #333;
    width: 37rem;
    ${montserratAlternatesRegular}
    font-size: 1.5rem;
    line-height: normal;
    margin-bottom: 5.06rem;
    & span {
        color: #FF8D29;
        font-size: 1.5rem;
        ${montserratAlternatesMedium}
        line-height: normal;
    }
}
`

export const StoresContainer = css`
display: flex;

& a {
    margin-right: 1.88rem;
}
`