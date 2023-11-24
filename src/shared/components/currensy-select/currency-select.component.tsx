import React from 'react'

import {
	NavLink,
} from 'react-router-dom'
import {
	container,navLinkActive,navLink,
} from './currency-select.styled'
import type {
	ILinkConfig,
} from './currency-select.types'

interface IProps {
    links:Array<ILinkConfig>
}

const CurrencySelect: React.FC<IProps> = ({
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
		<div className={container}>
			{links.map(({
				to,
				title,
			},) => {
				return <NavLink className={selectClassNames} key={to} to={to}>{title}</NavLink>
			},)}
		</div>
	)
}

export default CurrencySelect