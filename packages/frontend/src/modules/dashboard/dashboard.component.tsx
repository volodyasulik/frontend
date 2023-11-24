import React from 'react'
import {
	Outlet,
} from 'react-router-dom'
import Header from '../navigate/header.component'
import Section from '../../shared/components/section/section.component'

const Dashboard: React.FC = () => {
	return (
		<>
			<Header />
			<Section>
				<Outlet />
			</Section>
		</>
	)
}

export default Dashboard