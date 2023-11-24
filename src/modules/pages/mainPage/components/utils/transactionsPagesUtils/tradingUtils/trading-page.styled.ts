import {
	css,
} from '@emotion/css'

export const TradingModalContainer = css`
padding: 0;
height: 25.0625rem;
`
export const ArrowImg = css`
width: 1.5rem;
height: 1.5rem;
`

export const TradingTitle = css`
& h3{
    padding-left: 14px ;
}
`

export const TradingButtons = css`
display: flex;
margin-bottom: 0.87rem;
`

export const tradingButton = function(active: boolean,): string {
	return css`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 2.5rem;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
color: #FFF;
border-bottom: ${active ?
		'0.125rem solid #03BEFF' :
		'none'};
background:  ${active ?
		'#2C2D31' :
		'#5B5C5F'};
`
}