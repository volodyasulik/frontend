import React from 'react'
import {
	SwapAndTradingContainer,
} from '../main-pages.styled'
import TradingWindowComponent from '../utils/transactionsPagesUtils/tradingUtils/trading-page.component'

const TradingPageComponent: React.FC = () => {
	return <div className={SwapAndTradingContainer}>
		<TradingWindowComponent />
	</div>
}

export default TradingPageComponent