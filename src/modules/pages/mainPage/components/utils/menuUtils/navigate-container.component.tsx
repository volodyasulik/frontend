import React from 'react'
import OverviewIcon from '../../../../../../assets/icons/overviewIcon.svg'
import TradingIcon from '../../../../../../assets/icons/tradingIcon.svg'
import SwapIcon from '../../../../../../assets/icons/swapIcon.svg'
import FundingIcon from '../../../../../../assets/icons/fundingIcon.svg'
import {
	Link,
} from 'react-router-dom'
import {
	linkItem,ActiveLink,
} from './menu-utils.styled'
import {
	RouterKeys,
} from '../../../../../../router/keys'

interface IProps {
    activeLink: string
}

const MenuNavigate: React.FC<IProps> = ({
	activeLink,
},) => {
	return <>
		<Link to={''} style={{
			textDecoration: 'none',
			outline:        0,
		}}>
			<div className={`${linkItem()}`}>
				<img src={OverviewIcon} alt='Overview Icon' />
				<p>Overview</p>
			</div>
		</Link>
		<Link to={RouterKeys.TRADING} style={{
			textDecoration: 'none',
			outline:        0,
		}}>
			<div className={`${linkItem()} ${RouterKeys.TRADING === activeLink && ActiveLink}`}>
				<img src={TradingIcon} alt='Trading Icon' />
				<p>Trading</p>
			</div>
		</Link>
		<Link to={RouterKeys.SWAP} style={{
			textDecoration: 'none',
			outline:        0,
		}}>
			<div className={`${linkItem()} ${RouterKeys.SWAP === activeLink && ActiveLink}`}>
				<img src={SwapIcon} alt='Swap Icon' />
				<p>Swap</p>
			</div>
		</Link>
		<Link to={RouterKeys.FUNDING} style={{
			textDecoration: 'none',
			outline:        0,
		}}>
			<div className={`${linkItem()} ${RouterKeys.FUNDING === activeLink && ActiveLink}`}>
				<img src={FundingIcon} alt='Funding Icon' />
				<p>Funding</p>
			</div>
		</Link>
	</>
}

export default MenuNavigate