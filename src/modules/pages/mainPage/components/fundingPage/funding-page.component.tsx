import React, {
	useState,
} from 'react'
import {
	SwapAndTradingContainer,FundingContainer,
} from '../main-pages.styled'
import FundingWindowComponent from '../utils/transactionsPagesUtils/fundingUtils/funding-page-window.component'

const FundingPageComponent: React.FC = () => {
	const [fundigStyle,setFundingStyle,] = useState(false,)
	return <div className={`${SwapAndTradingContainer} ${fundigStyle && FundingContainer}`}>
		<FundingWindowComponent setHeight={setFundingStyle}/>
	</div>
}

export default FundingPageComponent