import React from 'react'
import {
	SwapAndTradingContainer,
} from '../main-pages.styled'
import SwapWindowComponent from '../utils/transactionsPagesUtils/swapUtils/swap-window.component'

const SwapPageComponent: React.FC = () => {
	return <div className={SwapAndTradingContainer}>
		<SwapWindowComponent />
	</div>
}

export default SwapPageComponent