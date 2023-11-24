/* eslint-disable complexity */
import React, {
	useState,
} from 'react'
import {
	SingPage, SevadaLogoStyle, TitleContainer, Title, FormContainer, ButtonsContainer, BorderContainer, GoogleButton, ForgotPassword,
} from './sign-page.styled'
import SevadaLogo from '../../../../assets/icons/sevada-logo.svg'
import GoogleIcon from '../../../../assets/icons/google-icon.svg'
import UserFormDialog from '../component/singForm/sign-form.component'
import {
	RouterKeys,
} from '../../../../router/keys'
import {
	services,
} from '../../../../shared/services/http-factory.service'
import useInputValues from '../../../../store/input-data'
import type {
	SignPageFormValues,
} from '../../../../shared/types/input-values.types'
import ProfileInfoForm from '../component/profileForm/profile-form.component'
import CodeInputForm from '../component/codeInputForm/code-input-form.component'

interface IProps {
    type: string;
}
interface IShowPage {
    showSignPage?: boolean,
    showProfileForm?: boolean,
    showCodeForm?: boolean,
}
const SingPages: React.FC<IProps> = ({
	type,
},) => {
	const [showPage, setShowPage,] = useState<IShowPage>({
		showSignPage:    true,
		showProfileForm: false,
		showCodeForm:    false,
	},)
	const setPage = (newValues: IShowPage,): void => {
		setShowPage((prevShowPage,) => {
			return {
				...prevShowPage,
				...newValues,
			}
		},)
	}
	const {
		setLogin, setPassword,setInitialValueLogin,
	} = useInputValues()
	const submitHandler = async(typeFunk: string, values: SignPageFormValues,): Promise<void> => {
		if (typeFunk === RouterKeys.SINGUP) {
			setInitialValueLogin(values.login,)
			setPassword(values.password,)
			setLogin(values.login,)
			setPage({
				showProfileForm: true, showSignPage: false,
			},)
		} else {
			const {
				login,
				password,
			} = values
			try {
				setPassword(password,)
				setLogin(login,)

				await services.createAuthHttpService().post('auth/send-code', {
					login,
				},)
				setPage({
					showCodeForm: true, showSignPage: false,
				},)

				// const jwt = await services.createAuthHttpService().post('auth/sign-in', {
				// 	login, password,
				// },)
			} catch {
				// eslint-disable-next-line no-alert
				alert('User not found',)
			}
		}
	}
	const googleAuthHandler = (): void => {
		window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google/callback`, '_self',)
	}
	let content
	if (showPage.showSignPage) {
		content = (
			<div className={SingPage}>
				<div className={TitleContainer}>
					<img className={SevadaLogoStyle} src={SevadaLogo} alt='Sevada Logo' />
					<h2 className={Title}>{`Sign ${type === RouterKeys.SINGIN ?
						'In' :
						'Up'} to Sedava`}</h2>
				</div>
				<div className={FormContainer}>
					<UserFormDialog formHandler={(values: SignPageFormValues,): void => {
						submitHandler(type, values,)
					}} type={type} />
					<div className={ButtonsContainer}>
						<div className={BorderContainer}>
							<span></span>
							<div >or</div>
							<span></span>
						</div>
						<div className={GoogleButton} onClick={googleAuthHandler}>
							<img src={GoogleIcon} alt='Google icon' />
							<div className={Title}>Continue with Google</div>
						</div>
						<div className={ForgotPassword}>
							{type === RouterKeys.SINGIN ?
								'Need an account' :
								'Already have an account'}?<a href={`/${type === RouterKeys.SINGIN ?
								RouterKeys.SINGUP :
								RouterKeys.SINGIN}`}>{type === RouterKeys.SINGIN ?
									' Sign Up' :
									' Sign In'}</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
	if (showPage.showProfileForm) {
		content = <ProfileInfoForm setPage={setPage} />
	}
	if (showPage.showCodeForm) {
		content = <CodeInputForm setPage={setPage} />
	}
	return (
		<>
			{content}
		</>
	)
}

export default SingPages