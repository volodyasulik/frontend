import React from 'react'
import {
	Formik, Field, Form, ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import type {
	ISignUp,
} from '../types/sign-up.types'
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
	Title,
} from '../styles/sign-in.style'
import {
	SignUpButton,
	SignUpTitle,
} from '../styles/sign-up.style'
import {
	Link,
} from 'react-router-dom'
import {
	RouterKeys,
} from '../../../router/keys'

const validationSchema = Yup.object().shape({
	email:    Yup.string().email('Неправильний формат електронної пошти',)
		.required('Обов\'язкове поле',),
	phone:    Yup.string().matches(/^\+?[0-9]*$/, 'Неправильний формат телефонного номеру',)
		.required('Обов\'язкове поле',),
	password: Yup.string().required('Обов\'язкове поле',),
	fullName: Yup.string().required('Обов\'язкове поле',),
},)

const SignUpComponent: React.FC = () => {
	const initialValues: ISignUp = {
		fullName: '',
		email:    '',
		phone:    '',
		password: '',
	}

	const [savedAccountsValues, setSavedAccountsValues,] = React.useState<ISignUp | null>()

	const onSubmit = (value: ISignUp,): void => {
		setSavedAccountsValues(() => {
			const newValue = {
				phone:    value.phone,
				fullName: value.fullName,
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
			<div className={classBuilder([LoginContainer,],) }>
				<h1 className={classBuilder([Title,SignUpTitle,],)}>Реєстрація</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<Form className={LoginForm}>
						<div className={LoginInput}>
							<Field
								type='text'
								id='fullName'
								name='fullName'
								placeholder='ПІБ'
							/>
						</div>
						<ErrorMessage name='fullName'>{(msg,): React.JSX.Element => {
							return <ErrorMessageComponent msg={msg}/>
						}}</ErrorMessage>
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
						<div className={classBuilder([LoginInput,],)}>
							<Field
								type='text'
								id='phone'
								name='phone'
								placeholder='Номер телефону'
							/>
						</div>
						<ErrorMessage name='phone'>{(msg,): React.JSX.Element => {
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
						<LoginButton styles={SignUpButton}>Реєстрація</LoginButton>
						<div className={LoginLink}>
							<p>Уже маєте акаунта? <Link to={`/${RouterKeys.SIGN_IN}`}>Вхід</Link ></p>
						</div>
					</Form>
				</Formik>
			</div>
		</div>

	)
}
export default SignUpComponent
