/* eslint-disable max-depth */
/* eslint-disable complexity */
import React, {
	useEffect,
	useState,
} from 'react'
import {
	Form,
} from 'react-final-form'

import FormField from '../../../../../shared/components/form-field/form-field.component'
import {
	email,
} from '../../../../../shared/utils/validators/email.validator'
import {
	SubmitButton, InputContainer, ErrorMessage,
} from '../../pages/sign-page.styled'
import type {
	SignPageFormValues,
} from '../../../../../shared/types/input-values.types'
import {
	RouterKeys,
} from '../../../../../router/keys'
import {
	password,
} from '../../../../../shared/utils/validators/password.validator'
import {
	services,
} from '../../../../../shared/services/http-factory.service'
import useInputValues from '../../../../../store/input-data'
import {
	LOCAL_STORAGE_KEYS,
} from '../../../../../shared/types/local-storage.types'

type Props = {
    initialValues?: SignPageFormValues
    formHandler: (values: SignPageFormValues) => void;
    type: string;
}

const UserFormDialog: React.FunctionComponent<Props> = ({
	initialValues,
	formHandler,
	type = RouterKeys.SINGIN,
},) => {
	const [confirmPassword, setConfirmPassword,] = useState(false,)
	const [invalidPassword, setInvalidPassword,] = useState(false,)
	const [mainPassword, setMainPassword,] = useState('',)
	const [beEmpty, setBeEmpty,] = useState(false,)
	const [userExist, setUserExist,] = useState(false,)
	const [beEmptyConfirmInput, setBeEmptyConfirmInput,] = useState(false,)
	const {
		initialLoginValue,setInitialValueLogin,
	} = useInputValues()
	const handleSubmit = async(values: SignPageFormValues,): Promise<void> => {
		localStorage.setItem(LOCAL_STORAGE_KEYS.LOCAL_LOGIN, values.login,)
		if (type === RouterKeys.SINGUP) {
			try {
				const validLogin = await services.createAuthHttpService().post('auth/check-user-login', {
					login: values.login,
				},)
				if (validLogin) {
					setUserExist(false,)
					if (values.confirmPassword && values.password && values.confirmPassword === values.password) {
						setConfirmPassword(false,)
						formHandler(values,)
						setBeEmpty(false,)
						setBeEmptyConfirmInput(false,)
					} else {
						if (values.confirmPassword !== values.password) {
							setConfirmPassword(true,)
						}

						if (!values.confirmPassword) {
							setBeEmptyConfirmInput(true,)
							setConfirmPassword(false,)
						}
						if (!values.password) {
							setBeEmpty(true,)
						}
					}
				} else {
					setUserExist(true,)
				}
			} catch {
				setUserExist(true,)
			}
		} else {
			try {
				const validLogin = await services.createAuthHttpService().post('auth/check-user-login', {
					login: values.login,
				},)
				// eslint-disable-next-line no-negated-condition
				if (!validLogin) {
					try {
						if (values.password) {
							await services.createAuthHttpService().post('auth/check-password', {
								login: values.login,password: values.password,
							},)

							formHandler(values,)
							setInvalidPassword(false,)
							setBeEmpty(false,)
						} else {
							setBeEmpty(true,)
						}
					} catch {
						setInvalidPassword(true,)
					}
				} else {
					setUserExist(true,)
				}
			} catch (err) {
				// eslint-disable-next-line no-console
				console.log(err,)
			}
		}
	}
	useEffect(() => {
		const loginFromLocalStotige = localStorage.getItem(LOCAL_STORAGE_KEYS.LOCAL_LOGIN,)
		if (loginFromLocalStotige) {
			setInitialValueLogin(loginFromLocalStotige,)
			localStorage.removeItem(LOCAL_STORAGE_KEYS.LOCAL_LOGIN,)
		}
	}, [],)
	return (
		<>

			<Form<SignPageFormValues>
				onSubmit={handleSubmit}
				initialValues={initialValues ?? undefined}
				render={({
					handleSubmit,
				},): React.ReactNode => {
					return (
						<form
							className={InputContainer}
							onSubmit={handleSubmit}
							onChange={(e,): void => {
								const eventSring = (e as unknown as React.ChangeEvent<HTMLInputElement>).target.id
								const eventValue = (e as unknown as React.ChangeEvent<HTMLInputElement>).target.value
								if (eventSring === 'password') {
									setMainPassword(eventValue,)
									setBeEmpty(false,)
								}
								if (eventSring === 'confirmPassword') {
									if (eventValue === mainPassword) {
										setConfirmPassword(false,)
									} else {
										setConfirmPassword(true,)
										setBeEmptyConfirmInput(false,)
									}
								}
							}}
						>
							<FormField
								name='login'
								label='Email / Phone Number'
								validate={email}
								placeholder='Enter your Email or Phone Number'
								type='text'
								initiaValue={initialLoginValue}
							/>
							{
								userExist && <div className={ErrorMessage}>{`${type === RouterKeys.SINGUP ?
									'Account already registered' :
									'User does not exist'}` }</div>
							}

							<FormField
								name='password'
								label='Password'
								type='password'
								validate={password}
								placeholder={type === RouterKeys.SINGUP ?
									'Create Password' :
									'Enter your Password'}
							/>
							{
								invalidPassword && <div className={ErrorMessage}>Invalid password</div>
							}
							{
								beEmpty && <div className={ErrorMessage}>Can't be empty</div>
							}
							{type !== RouterKeys.SINGUP && <div style={{
								display:        'flex',
								justifyContent: 'flex-end',
							}}>
								<a href={`/${RouterKeys.CODEINPUT}`} >Forgot Password?</a>
							</div>}
							{
								type === RouterKeys.SINGUP && (
									<FormField
										name='confirmPassword'
										placeholder='Confirm Password'
										type='password'
									/>
								)

							}
							{
								confirmPassword && <div className={ErrorMessage}>Passwords don't match</div>
							}
							{
								beEmptyConfirmInput && <div className={ErrorMessage}>Can't be empty</div>
							}

							<button className={SubmitButton}>
								{type === RouterKeys.SINGUP ?
									'Continue' :
									'Sign In'}
							</button>
						</form>
					)
				}}
			/>
		</>
	)
}

export default UserFormDialog