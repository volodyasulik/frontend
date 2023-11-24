import * as React from 'react'
import {
	Navigate,
	Route,
} from 'react-router-dom'

import {
	RouterKeys,
} from './keys'

import AboutUs from '../modules/aboutUs/about-us.component'
import Dashboard from '../modules/dashboard/dashboard.component'
import SignInComponent from '../modules/login/components/sign-in.component'
import SignUpComponent from '../modules/login/components/sign-up.component'

export const publicRoutes = (
	<>
		<Route path={RouterKeys.ROOT} element={<Dashboard />} >
			<Route path={RouterKeys.ABOUT_US} element={<AboutUs />} />
		</Route>
		<Route path={RouterKeys.SIGN_IN} element={<SignInComponent />} />
		<Route path={RouterKeys.SIGN_UP} element={<SignUpComponent />} />
		<Route path={RouterKeys.ALL_MATCH} element={<Navigate to={RouterKeys.ABOUT_US} />} />
	</>
)

export const privateRoutes = (
	<>
	</>
)

