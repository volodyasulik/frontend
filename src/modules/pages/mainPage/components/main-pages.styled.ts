import {
	css,
} from '@emotion/css'
import colors from '../../../../shared/styles/colors.consts'
import BackGroundImg from '../../../../assets/images/swap&traiding-bg-img.svg'

const windowHeight = window.innerHeight

export const MainPageStyled = css`
display: flex;
`

export const MainMenuContainer = css`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 30px 16px 16px 32px;
background-color: ${colors.lightBlack};
width: 15%;
min-height: ${windowHeight}px;
`

export const SwapAndTradingContainer = css`
background-image: url(${BackGroundImg});
background-color: ${colors.black};
background-size: cover;
width: 85%;
max-height: 100vh;
display: flex;
justify-content: center;
padding-top: 126px;
overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

export const FundingContainer = css`
padding-top: 50px;
padding-bottom: 50px;
`