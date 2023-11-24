import React from 'react'
import MenuNavigate from './utils/menuUtils/navigate-container.component'
import PlanContainerComponent from './utils/menuUtils/plan-container.component'
import ControlNavigateContainer from './utils/menuUtils/control-navigate-container.component'
import {
	MainMenuContainer,
} from './main-pages.styled'
import UserTitleContainer from './utils/menuUtils/user-title.component'
import {
	useLocation,
} from 'react-router-dom'

const MainMenu: React.FC = () => {
	const location = useLocation()
	const path = location.pathname.split('/',)
	const activeLink = path.pop()!
	return <div className={MainMenuContainer}>
		<UserTitleContainer />
		<MenuNavigate activeLink={activeLink} />
		<PlanContainerComponent />
		<ControlNavigateContainer activeLink={activeLink} />
	</div>
}

export default MainMenu