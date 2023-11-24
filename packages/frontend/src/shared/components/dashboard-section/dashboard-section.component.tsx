import React from 'react'
import {
	section,
} from './dashboard-section.styled'

interface IProps {
    children: React.JSX.Element | Array<React.JSX.Element> | string
}

const DashboardSection: React.FC<IProps> = ({
	children,
},) => {
	return (
		<section className={section}>
			{children}
		</section>
	)
}

export default DashboardSection
