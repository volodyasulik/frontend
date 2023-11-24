import React from 'react'
import MainMenu from './components/main-menu.component'
import {
	MainPageStyled,
} from './components/main-pages.styled'
import SwapPageComponent from './components/swapPage/swap-page.component'
import {
	Route,
	Routes,
} from 'react-router-dom'
import TradingPageComponent from './components/tradingPage/trading-page.component'
import {
	RouterKeys,
} from '../../../router/keys'
import FundingPageComponent from './components/fundingPage/funding-page.component'
import SettingPageComponent from './components/settingPage/setting-page.component'

const MainPage: React.FC = () => {
	return <div className={MainPageStyled}>
		<MainMenu />
		<Routes>
			<Route path={RouterKeys.SWAP} element={<SwapPageComponent />} />
			<Route path={RouterKeys.TRADING} element={<TradingPageComponent />} />
			<Route path={RouterKeys.FUNDING} element={<FundingPageComponent />} />
			<Route path={RouterKeys.SETTING} element={<SettingPageComponent />} />
		</Routes>
	</div>
}

export default MainPage