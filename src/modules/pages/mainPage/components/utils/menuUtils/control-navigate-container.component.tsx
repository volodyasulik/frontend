import React from 'react'
import SupportIcon from '../../../../../../assets/icons/supportIcon.svg'
import SettingsIcon from '../../../../../../assets/icons/settingsIcon.svg'
import SignOutIcon from '../../../../../../assets/icons/signOutIcon.svg'
import {
	Link, useNavigate,
} from 'react-router-dom'
import {
	ActiveLink,
	linkItem, SedavaLogoStyle,
} from './menu-utils.styled'
import SedavaLogo from '../../../../../../assets/images/sedava-title-logo.svg'
import {
	RouterKeys,
} from '../../../../../../router/keys'
import colors from '../../../../../../shared/styles/colors.consts'
import {
	services,
} from '../../../../../../shared/services/http-factory.service'

interface IProps {
    activeLink: string
}

const ControlNavigateContainer: React.FC<IProps> = ({
	activeLink,
},) => {
	const navigate = useNavigate()
	function deleteCookie(): void {
		document.cookie = 'connect.sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
	}

	const logOutHandler = async(): Promise<void> => {
		deleteCookie()
		await services.createAuthHttpService().get<string>('auth/logout',)
		navigate('/sign-in',)
	}
	return <>
		<Link to={''} style={{
			textDecoration: 'none',
			outline:        0,
		}}>
			<div className={linkItem('14px',)} >
				<img src={SupportIcon} alt='Support Icon' />
				<p>Support</p>
			</div>
		</Link>
		<Link to={RouterKeys.SETTING} style={{
			textDecoration: 'none',
			outline:        0,
		}}>
			<div className={`${linkItem('14px',)} ${RouterKeys.SETTING === activeLink && ActiveLink}`}>
				<img src={SettingsIcon} alt='Settings Icon' />
				<p>Settings</p>
			</div>
		</Link>
		<button style={{
			textDecoration:  'none',
			outline:         0,
			backgroundColor: colors.lightBlack,
			border:          0,
		}}>
			<div className={linkItem('14px',)} onClick={logOutHandler}>
				<img src={SignOutIcon} alt='Sign Out Icon' />
				<p>Sign Out</p>
			</div>
		</button>
		<img className={SedavaLogoStyle} src={SedavaLogo} alt='Sedava Logo' />
	</>
}

export default ControlNavigateContainer