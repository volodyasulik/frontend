import {
	css,
} from '@emotion/css'

import bg from '../../../assets/bg/dashboard.png'
import colors from '../../styles/colors.consts'

export const section = css`
    position: relative;
    margin-left: 237px;
    overflow-y: auto;
    padding: 30px;
    flex-grow: 1;
    background: ${colors.lightBlack} url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    mix-blend-mode: color-dodge;
    min-height: 100vh;
`