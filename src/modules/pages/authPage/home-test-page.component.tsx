import React, {
	useState, useEffect,
} from 'react'
import {
	Helmet,
} from 'react-helmet-async'
import {
	services,
} from '../../../shared/services/http-factory.service'
import {
	useNavigate ,
} from 'react-router-dom'
import {
	useToken,
} from '../../../store/token'
import {
	SubmitButton,
} from './pages/sign-page.styled'
import {
	HomeContainer,
} from './home.styled'
import ComplyCubeBtn from '../../../shared/components/comply-cube/comply-cube.component'

interface IResponse {
    jwtToken: string
}

const HomeTestPage: React.FC = () => {
	const {
		setToken,
		resetToken,
	} = useToken()
	const [error, setError,] = useState<string | undefined>(undefined,)
	const navigate = useNavigate()
	useEffect(() => {
		const getJWT = async(): Promise<void> => {
			try {
				const response = await services.createAuthHttpService().get<string>('auth/get-jwt-token',)
				setToken((response as unknown as IResponse).jwtToken,)
			} catch (err) {
				setError(err.response?.data || 'An error occurred.',)
			}
		}

		getJWT()
	}, [],)

	function deleteCookie(): void {
		document.cookie = 'connect.sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
	}

	const logOutHandler = async(): Promise<void> => {
		deleteCookie()
		await services.createAuthHttpService().get<string>('auth/logout',)
		resetToken()
		navigate('/sign-in',)
	}
	return (<>
		<Helmet>
			<script src='https://assets.complycube.com/web-sdk/v1/complycube.min.js'></script>
		</Helmet>
		<div className={HomeContainer}>
			<div style={{
				display:       'flex',
				flexDirection: 'column',
			}}>
				{error ?
					(
						<p>Token not exist!</p>
					) :
					(
						<p>User exist!</p>
					)}
				<ComplyCubeBtn/>
				<button className={SubmitButton} onClick={logOutHandler}>Log out</button>
			</div>
		</div>
	</>
	)
}
export default HomeTestPage