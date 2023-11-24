/* eslint-disable complexity */
/* eslint-disable max-depth */
import React, {
	useEffect,
	useRef, useState,
} from 'react'
import {
	ForgotPasswordPage, TitleContainer, Description, receiveContainer, ArrowBatton, ErrorMessage,
} from './code-input-form.styled'
import SevadaLogo from '../../../../../assets/icons/sevada-logo.svg'
import ArrowIcon from '../../../../../assets/icons/arrow.svg'
import {
	services,
} from '../../../../../shared/services/http-factory.service'
import useInputValues from '../../../../../store/input-data'
import {
	useLocation,
} from 'react-router-dom'
import {
	RouterKeys,
} from '../../../../../router/keys'
import {
	useToken,
} from '../../../../../store/token'
interface IShowPage {
	showSignPage?: boolean,
	showProfileForm?: boolean,
	showCodeForm?: boolean,
}
interface IProps {
	setPage?: (states: IShowPage) => void
}

const authService = services.createAuthHttpService()

const CodeInputForm: React.FC<IProps> = ({
	setPage,
},) => {
	let typeSubmit: string
	const location = useLocation()
	const {
		setToken,
	} = useToken()
	const path = location.pathname.split('/',)
	if (path[1]) {
		// eslint-disable-next-line prefer-destructuring
		typeSubmit = path[1]
	} else {
		typeSubmit = RouterKeys.SINGUP
	}
	const {
		login, password, userData,
	} = useInputValues()
	const [verifyCode, setVerifyCode,] = useState(false,)
	const [invalidCode, setInvalidCode,] = useState(false,)
	const [sendCodeError, setSendCodeError,] = useState(false,)
	const [resetCode,setResetCode,] = useState(true,)
	const input1Ref = useRef(null,)
	const input2Ref = useRef(null,)
	const input3Ref = useRef(null,)
	const input4Ref = useRef(null,)
	const handleInputChange = async(event: React.ChangeEvent<HTMLInputElement>,
		latestInputRef: React.MutableRefObject<null | string>,
		nextInputRef?: React.MutableRefObject<null | string>,): Promise<void> => {
		event.preventDefault()
		const inputValue = event.target.value
		if (inputValue.length === 4) {
			const code = inputValue.split('',)
			code.forEach((el, index,) => {
				if (el) {
					if (index + 1 === 1) {
						(input1Ref.current as unknown as HTMLInputElement).value = el
					}
					if (index + 1 === 2) {
						(input2Ref.current as unknown as HTMLInputElement).value = el
					}
					if (index + 1 === 3) {
						(input3Ref.current as unknown as HTMLInputElement).value = el
					}
					if (index + 1 === 4) {
						(input4Ref.current as unknown as HTMLInputElement).value = el
					}
				}
			},)
			await submitHandler()
		}
		if (inputValue.length === 0) {
			if (latestInputRef.current) {
				(latestInputRef.current as unknown as HTMLInputElement).focus()
			}
		}
		if (inputValue.length === 1) {
			if (nextInputRef?.current) {
				(nextInputRef.current as unknown as HTMLInputElement).focus()
			}
		}
		if (inputValue.length === 2) {
			const code = inputValue.split('',)
			code.forEach((el, index,) => {
				if (el) {
					if (index + 1 === 1) {
						(input1Ref.current as unknown as HTMLInputElement).value = el
					}
					if (index + 1 === 2) {
						(input2Ref.current as unknown as HTMLInputElement).value = el
						;(input3Ref.current as unknown as HTMLInputElement).focus()
					}
				}
			},)
		}
	}

	const submitHandler = async(): Promise<void> => {
		const code = (input1Ref.current as unknown as HTMLInputElement).value +
			(input2Ref.current as unknown as HTMLInputElement).value + (input3Ref.current as unknown as HTMLInputElement).value + (input4Ref.current as unknown as HTMLInputElement).value
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const jwt = await authService.put<string,any>('auth/send-code', {
				login, code,
			},)
			setToken(jwt,)
			setInvalidCode(false,)
			// await getUser()
			setVerifyCode(Boolean(jwt,) ,)
		} catch {
			setInvalidCode(true,)
		}
	}

	const disableCode = (): void => {
		setResetCode(false,)
		setTimeout(() => {
			setResetCode(true,)
		},15000,)
	}

	const signUp = async():Promise<void> => {
		let body = {
			login, password, ...userData,
		}
		if (verifyCode) {
			try {
				if (typeSubmit === RouterKeys.SINGIN) {
					body = {
						login: body.login, password: body.password,
					}
				}
				const token = await authService.post<string, Record<string, string | undefined>>(`auth/${typeSubmit}`, body,)
				setToken(token,)
			} catch (err) {
				setInvalidCode(true,)
			}
		}
	}

	const asyncSignHandler = async(): Promise<void> => {
		await signUp()
		// await getUser()
	}

	useEffect(() => {
		asyncSignHandler()
	}, [verifyCode,],)
	const resetPasswordHandler = async(): Promise<void> => {
		if (resetCode) {
			try {
				await authService.post('auth/send-code', {
					login,
				},)

				setSendCodeError(false,)
				disableCode()
			} catch (e) {
				setSendCodeError(true,)
			}
		}
	}
	const goBackHandler = (): void => {
		if (setPage) {
			if (typeSubmit === RouterKeys.SINGUP) {
				setPage({
					showCodeForm: false, showProfileForm: true,
				},)
			} else {
				setPage({
					showCodeForm: false, showSignPage: true,
				},)
			}
		}
	}
	return (
		<>
			<div>
				<button className={ArrowBatton} onClick={goBackHandler}>
					<img src={ArrowIcon} alt='Arrow Icon' />
					<p>Back</p>
				</button>
			</div>
			<div className={ForgotPasswordPage}>
				<div className={TitleContainer}>
					<img src={SevadaLogo} alt='Sevada Logo' />
					<h3>Enter verification code</h3>
				</div>
				<div className={Description}>We sent the verification code to<br />{login}</div>
				<form>
					<input
						autoFocus
						type='text'
						ref={input1Ref}
						onChange={(event,): void => {
							handleInputChange(event, input1Ref,input2Ref,)
						}}
						maxLength={4} />
					<input
						type='text'
						ref={input2Ref}
						onChange={(event,): void => {
							handleInputChange(event, input1Ref,input3Ref,)
						}}
						onKeyDown={(event,):void => {
							if (event.key === 'Backspace' && (input2Ref.current as unknown as HTMLInputElement).value.length === 0) {
								(input1Ref.current as unknown as HTMLInputElement).focus()
							}
							if ((/^[0-9]$/).test(event.key,) && (input2Ref.current as unknown as HTMLInputElement).value.length === 1) {
								(input3Ref.current as unknown as HTMLInputElement).focus()
							}
						}}
						maxLength={1} />
					<input
						type='text'
						ref={input3Ref}
						onChange={(event,): void => {
							handleInputChange(event,input2Ref ,input4Ref,)
						}}
						onKeyDown={(event,):void => {
							if (event.key === 'Backspace' && (input3Ref.current as unknown as HTMLInputElement).value.length === 0) {
								(input2Ref.current as unknown as HTMLInputElement).focus()
							}
							if ((/^[0-9]$/).test(event.key,) && (input3Ref.current as unknown as HTMLInputElement).value.length === 1) {
								(input4Ref.current as unknown as HTMLInputElement).focus()
							}
						}}
						maxLength={1} />
					<input
						type='text'
						ref={input4Ref}
						onChange={(event,): void => {
							handleInputChange(event, input3Ref,)
							submitHandler()
						}}
						onKeyDown={(event,):void => {
							if (event.key === 'Backspace' && (input4Ref.current as unknown as HTMLInputElement).value.length === 0) {
								(input3Ref.current as unknown as HTMLInputElement).focus()
							}
						}}
						maxLength={1}
					/>
				</form>
				{
					invalidCode && <div className={ErrorMessage}>Invalid code</div>
				}
				<div className={receiveContainer(!resetCode,)}>
					<p>If you didn’t receive the code</p>
					<button onClick={resetPasswordHandler}>Click here to resend
					</button>
					<span>The function will be available in 15 seconds</span>
				</div>
				{
					sendCodeError && <div className={ErrorMessage}>The code has not been sent</div>
				}

			</div >
		</>
	)
}
export default CodeInputForm