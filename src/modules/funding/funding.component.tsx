import React from 'react'

import {
	Outlet, useLocation,
} from 'react-router-dom'

import Card from '../../shared/components/card/card.component'
import TabNavigation from '../../shared/components/tab-navigation/tab-navigation.component'
import {
	currencyTypes,
	tabNavConfig,
} from './funding.const'
import CurrencySelect from '../../shared/components/currensy-select/currency-select.component'

const Funding: React.FC = () => {
	const location = useLocation()
	const title = location.pathname.split('/',)
	return (
		<Card title={title[1]}>
			<TabNavigation links={tabNavConfig} />
			<CurrencySelect links={currencyTypes(title[2]!,)} />
			<Outlet/>
		</Card>

	)
}

export default Funding

