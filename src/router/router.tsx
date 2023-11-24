import * as React from 'react'
import {
	BrowserRouter, Routes,
} from 'react-router-dom'

import {
	useTheme,
} from '../store/theme'

import {
	privateRoutes, publicRoutes,
} from './routes'

import {
	LOCAL_STORAGE_KEYS,
} from '../shared/types/local-storage.types'
import {
	THEMES,
} from '../shared/types/themes.types'
import {
	useToken,
} from '../store/token'
import {
	useUser,
} from '../store/user'
import {
	services,
} from '../shared/services/http-factory.service'
import type {
	IUser,
} from '../shared/types/user.types'

const userService = services.userHttpService

const Router: React.FunctionComponent = () => {
	const [isLoading,setIsLoading,] = React.useState(false,)
	const {
		token,
	} = useToken()

	const {
		setUser,
		user,
	} = useUser()

	const getUser = async(): Promise<void> => {
		setIsLoading(true,)
		const response = await userService.get<IUser>('users',)
		setUser(response,)
		setIsLoading(false,)
	}

	React.useEffect(() => {
		if (token) {
			getUser()
		}
	},
	[token,],)

	const {
		setTheme,
	} = useTheme()
	React.useEffect(() => {
		const theme = (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME,) as THEMES | undefined) ?? THEMES.AUTO
		setTheme(theme,)()
	}, [],)

	return (
		<BrowserRouter>
			<React.Suspense fallback={<div>Loading</div>}>
				<Routes>
					{
						user && !isLoading ?
							privateRoutes :
							publicRoutes
					}
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	)
}

export default Router
