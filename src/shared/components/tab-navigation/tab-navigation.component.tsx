import React from 'react'
import {
	NavLink,
} from 'react-router-dom'
import type {
	ILinkConfig,
} from './tab-navigation.component.types'
import {
	navContainer, navLink,navLinkActive,
} from './tab.navigation.styled'

interface IProps {
    links:Array<ILinkConfig>
}

const TabNavigation: React.FC<IProps> = ({
	links,
},) => {
	const selectClassNames = ({
		isActive,
	}:{isActive:boolean},):string => {
		return isActive ?
			`${navLinkActive} ${navLink}` :
			navLink
	}

	return (
		<nav className={navContainer}>
			{links.map(({
				to,
				title,
			},) => {
				return <NavLink className={selectClassNames} key={to} to={to}>{title}</NavLink>
			},)}
		</nav>
	)
}

export default TabNavigation