import {
	css,keyframes,
} from '@emotion/css'

const moveX = keyframes`
  from { left: 0; } to { left: calc(100% - 162px); }
`
const moveY = keyframes`
  from { top: 0; } to { top: calc(100% - 45px); }
`

export const box = css`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`
export const logo = css`
    display: block;
    position: absolute;
    animation: ${moveX} 5s linear 0s infinite alternate, ${moveY} 7s linear 0s infinite alternate;
`