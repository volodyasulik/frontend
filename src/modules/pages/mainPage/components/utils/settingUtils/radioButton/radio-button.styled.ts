import {
	css,
} from '@emotion/css'
import colors from '../../../../../../../shared/styles/colors.consts'
export const RadioButtonStyled = css`
display: flex;
align-items: center;
padding: 0.375rem 1.125rem 0.375rem 0.875rem;

& label {
    color: ${colors.white};
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 0.88rem;
}
`