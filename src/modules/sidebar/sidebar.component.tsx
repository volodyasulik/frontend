import React from 'react'
import {
	NavLink,Link, useNavigate,
} from 'react-router-dom'
import {
	RouterKeys,
} from '../../router/keys'
import {
	useToken,
} from '../../store/token'
import {
	services,
} from '../../shared/services/http-factory.service'
import {
	buttonsList,
	buttonsListItem,
	header,
	mainNav,
	mainNavList,
	sidebar,
	sidebarLogo,
} from './sidebar.styled'

import homeIco from '../../assets/icons/dashboard/home.svg'
import tradingIco from '../../assets/icons/dashboard/trade.svg'
import swapIco from '../../assets/icons/dashboard/swap.svg'
import fundingIco from '../../assets/icons/dashboard/funds.svg'
import sedavaLogo from '../../assets/icons/dashboard/sedava.svg'
import gearIco from '../../assets/icons/dashboard/gear.svg'
import supportIco from '../../assets/icons/dashboard/support.svg'
import logOutIco from '../../assets/icons/dashboard/logout.svg'

import IcoBtn from '../../shared/components/ico-btn/ico-btn.component'
import {
	navlinkClass,
} from './sidebar.utils'
import colors from '../../shared/styles/colors.consts'
import {
	useUser,
} from '../../store/user'

const authService = services.createAuthHttpService()

const Sidebar: React.FC = () => {
	const {
		resetToken,
	} = useToken()
	const navigate = useNavigate()

	const {
		resetUser,
		user,
	} = useUser()

	function deleteCookie(): void {
		document.cookie = 'connect.sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
	}
	const logOutHandler = async(): Promise<void> => {
		deleteCookie()
		await authService.get<string>('auth/logout',)
		resetToken()
		resetUser()
		navigate(RouterKeys.SINGIN,)
	}

	return (
		<aside className={sidebar}>
			<Link to={RouterKeys.SETTING} className={header}>
				<div>{`${user?.name[0]}${user?.surName[0]}`}</div>
				<p>{`${user?.name} ${user?.surName}`}</p>
			</Link>
			<nav className={mainNav}>
				<ul className={mainNavList}>
					<li><NavLink className={navlinkClass(homeIco,)} to={RouterKeys.OVERVIEW}>Overview</NavLink></li>
					<li><NavLink className={navlinkClass(tradingIco,)} to={RouterKeys.TRADING}>Trading</NavLink></li>
					<li><NavLink className={navlinkClass(swapIco,)} to={RouterKeys.SWAP}>Swap</NavLink></li>
					<li><NavLink className={navlinkClass(fundingIco,)} to={`${RouterKeys.FUNDING}`}>Funding</NavLink></li>
				</ul>

				<ul className={buttonsList}>
					<li className={buttonsListItem}><IcoBtn prefixImage={supportIco} backgroundColor={colors.lightBlack} text='Support'/></li>
					<li><NavLink className={navlinkClass(gearIco,)} to={RouterKeys.SETTING}>Settings</NavLink></li>
					<li className={buttonsListItem}><IcoBtn prefixImage={logOutIco} backgroundColor={colors.lightBlack} onClick={logOutHandler} text='Sign Out'/></li>
				</ul>
			</nav>

			<Link to={RouterKeys.OVERVIEW} className={sidebarLogo}>
				<img src={sedavaLogo} />
			</Link>
		</aside>
	)
}

export default Sidebar
