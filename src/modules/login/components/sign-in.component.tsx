import React from 'react'
import {
	Formik, Field, Form, ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import type {
	ILoginValue,
} from '../types/sign-in.types'
import {
	LoginBox,
	LoginContainer, LoginForm, LoginInput, LoginLink,
} from '../styles/login.style'
import {
	classBuilder,
} from '../../../shared/utils/class-builder.util'
import LoginButton from '../../../shared/components/login-button/login-button.component'
import ErrorMessageComponent from '../../../shared/components/error-message/error-message.component'
import {
	BorderContainer, Title,
} from '../styles/sign-in.style'
import {
	Link,
} from 'react-router-dom'
import {
	RouterKeys,
} from '../../../router/keys'
import SignInWith from '../../../shared/components/sign-in-with/sign-in-with.component'
import GoogleIcon from '../../../assets/icons/google.icon.svg'
import {
	css,
} from '@emotion/css'

const validationSchema = Yup.object().shape({
	email:    Yup.string().email('Неправильний формат електронної пошти',)
		.required('Обов\'язкове поле',),
	password: Yup.string().required('Обов\'язкове поле',),
},)

const SignInComponent: React.FC = () => {
	const initialValues: ILoginValue = {
		email:    '',
		password: '',
	}

	const [savedAccountsValues, setSavedAccountsValues,] = React.useState<ILoginValue | null>()

	const onSubmit = (value: ILoginValue,): void => {
		setSavedAccountsValues(() => {
			const newValue = {
				email:    value.email,
				password: value.password,
			}
			return newValue
		},)
	}
	React.useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(savedAccountsValues,)
	}, [savedAccountsValues,],)

	return (
		<div className={LoginBox}>
			<div className={classBuilder([LoginContainer,],)}>
				<h1 className={Title}>Вхід</h1>
				<SignInWith icon={GoogleIcon} styles={css`
                    margin-bottom: '0';
                ` } link={'#'} />
				<div className={BorderContainer}>
					<span></span>
					<p>Або</p>
					<span></span>
				</div>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<Form className={LoginForm}>
						<div className={LoginInput}>
							<Field
								type='text'
								id='email'
								name='email'
								placeholder='Електрона пошта'
							/>
						</div>
						<ErrorMessage name='email'>{(msg,): React.JSX.Element => {
							return <ErrorMessageComponent msg={msg}/>
						}}</ErrorMessage>
						<div className={LoginInput}>
							<Field
								type='password'
								id='password'
								name='password'
								placeholder='Пароль'
							/>
						</div>
						<ErrorMessage name='password'>{(msg,): React.JSX.Element => {
							return <ErrorMessageComponent msg={msg}/>
						}}</ErrorMessage>
						<div className={LoginLink} style={{
							display: 'block',
						}}>
							<p>Забули <a>Пароль?</a></p>
						</div>

						<LoginButton>Увійти</LoginButton>
						<div className={LoginLink}>
							<p>Немає акаунта? <Link to={`/${RouterKeys.SIGN_UP}`}>Заєструватися</Link></p>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	)
}
export default SignInComponent
