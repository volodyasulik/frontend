import React from 'react'
import NomoLogo from '../../assets/icons/nomo-logo.icon.svg'
import {
	HeaderLogo,HeaderNav,HeaderStyle,BackGroundImg,
} from './header.styled'
import {
	Link,
} from 'react-router-dom'
import FrameOne from '../../assets/bg/amoutUs-frage-1.jpg'
import {
	RouterKeys,
} from '../../router/keys'

const Header: React.FC = () => {
	return <>
		<div className={BackGroundImg}>
			<img src={FrameOne} alt='Frame One' />
		</div>
		<header className={HeaderStyle}>
			<img className={HeaderLogo} src={ NomoLogo} alt='NomoLogo'/>
			<nav className={HeaderNav}>
				<ul>
					<li><Link to='#'>Кешбек</Link></li>
					<li><Link to='#'>Карта</Link></li>
					<li><Link to='#'>Криптовалюта</Link></li>
					<li><Link to='#'>Хто ми</Link></li>
					<li><Link to={RouterKeys.SIGN_IN}>Вхід</Link></li>
				</ul>
			</nav>
		</header>
	</>
}

export default Header