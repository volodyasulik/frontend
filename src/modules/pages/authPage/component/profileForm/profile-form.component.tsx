/* eslint-disable no-negated-condition */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import {
	Form,
} from 'react-final-form'

import FormField from '../../../../../shared/components/form-field/form-field.component'
import {
	SubmitButton, InputContainer, ErrorMessage,
} from '../../pages/sign-page.styled'

import {
	ProfileFormContainer, TittleContainer, ProfileInfoContainer, ArrowBatton,
} from './profile-form.styled'

import ArrowIcon from '../../../../../assets/icons/arrow.svg'

import SevadaLogo from '../../../../../assets/icons/sevada-logo.svg'
import CountrySelect from '../utils/country-select.component'
import DateInput from '../utils/date-input.component'
import useInputValues from '../../../../../store/input-data'
import {
	services,
} from '../../../../../shared/services/http-factory.service'
import {
	checkUserAge,
} from '../../../../../shared/utils/validators/check-user-age.validator'
import type {
	UserFormValues,
} from '../../../../../shared/types/user-form-values'

interface ISelect {
    value: string;
    label: string
}
interface IShowPage {
    showSignPage?: boolean,
    showProfileForm?: boolean,
    showCodeForm?: boolean,
}
interface IProps {
    setPage: (states: IShowPage) => void
}
const ProfileInfoForm: React.FunctionComponent<IProps> = ({
	setPage,
},) => {
	const {
		setUserData, login, userData, setDateInStore, dateInStore, setCountry,
	} = useInputValues()
	const [selectedCountry, setSelectedCountry,] = React.useState<string | ISelect>('Select Country',)
	const [countryError, setCountryError,] = React.useState(false,)
	const [date, setDate,] = React.useState('',)
	const [sendCodeError, setSendCodeError,] = React.useState(false,)
	const [dateErrorMessage, setDateErrorMessage,] = React.useState<string | undefined>(undefined,)
	const [nameErrorMessage, setNameErrorMessage,] = React.useState<string | undefined>(undefined,)
	const [surNameErrorMessage, setSurnameErrorMessage,] = React.useState<string | undefined>(undefined,)
	const [cityErrorMessage,setCityErrorMessage,] = React.useState<string | undefined>(undefined,)

	const handleSubmit = async(values: UserFormValues,): Promise<void> => {
		const country = selectedCountry as ISelect
		// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
		if (!values.city || !values.name || !values.surName || checkUserAge(date,) || !country.value) {
			if (!values.city) {
				setCityErrorMessage('City is required',)
			} else {
				setCityErrorMessage(undefined,)
			}
			if (!values.name) {
				setNameErrorMessage('Name is required',)
			} else {
				setNameErrorMessage(undefined,)
			}
			if (!values.surName) {
				setSurnameErrorMessage('Surname is required',)
			} else {
				setSurnameErrorMessage(undefined,)
			}
			if (!country.value) {
				setCountryError(true,)
			} else {
				setCountryError(false,)
			}
			if (checkUserAge(date,)) {
				setDateErrorMessage(checkUserAge(date,),)
			} else {
				setDateErrorMessage(undefined,)
			}
			return
		}
		setCountryError(false,)
		setDateErrorMessage(undefined,)
		setSurnameErrorMessage(undefined,)
		setNameErrorMessage(undefined,)
		setCityErrorMessage(undefined,)
		const dates = date.split('/',).map((num,) => {
			return Number.parseInt(num,)
		},)

		const birthday = new Date(dates[2]!, dates[1]! - 1, dates[0],)

		const options = {
			...values,
			country:  country.value,
			birthday: birthday.toISOString(),
		}
		try {
			await services.createAuthHttpService().post('auth/send-code', {
				login,
			},)
			setDateInStore(dates,)
			setUserData(options,)
			setPage({
				showProfileForm: false, showCodeForm: true, showSignPage: false,
			},)
			setSendCodeError(false,)
		} catch {
			setSendCodeError(true,)
		}
	}
	const goBackHandler = () => {
		setPage({
			showProfileForm: false, showSignPage: true,
		},)
		setUserData(undefined,)
		setCountry(undefined,)
		setDateInStore(undefined,)
	}
	return (
		<>
			<div>
				<button className={ArrowBatton} onClick={goBackHandler}>
					<img src={ArrowIcon} alt='Arrow Icon' />
					<p>Back</p>
				</button>
			</div>
			<div className={ProfileInfoContainer}>

				<div className={ProfileFormContainer}>
					<div className={TittleContainer}>
						<img src={SevadaLogo} alt='Sevada Logo' />
						<h2>Your profile information</h2>
					</div>
					<Form<UserFormValues>
						onSubmit={handleSubmit}
						initialValues={undefined}
						render={({
							handleSubmit,
						},): React.ReactNode => {
							return (
								<form
									className={InputContainer}
									onSubmit={handleSubmit}
								>
									<FormField
										name='name'
										label='Name'
										placeholder='Enter your Name'
										type='text'
										initiaValue={userData ?
											userData.name :
											undefined}
									/>
									{
										nameErrorMessage && <div className={ErrorMessage}>{ nameErrorMessage}</div>
									}
									<FormField
										name='surName'
										label='Surname'
										type='text'
										placeholder='Enter your Surname'
										initiaValue={userData ?
											userData.surName :
											undefined}
									/>
									{
										surNameErrorMessage && <div className={ErrorMessage}>{ surNameErrorMessage}</div>
									}

									<DateInput setDate={setDate} initialValue={dateInStore ?
										dateInStore :
										undefined} />
									{
										dateErrorMessage && <div className={ErrorMessage}>{ dateErrorMessage}</div>
									}
									<CountrySelect setSelectedCountry={setSelectedCountry} value={
										selectedCountry} error={countryError} />

									<FormField
										name='city'
										label='City'
										placeholder='Enter your City'
										type='text'
										initiaValue={userData ?
											userData.city :
											undefined}
									/>
									{
										cityErrorMessage && <div className={ErrorMessage}>{ cityErrorMessage}</div>
									}
									{
										sendCodeError && <div className={ErrorMessage}>The code has not been sent</div>
									}

									<button className={SubmitButton}>
                                        Continue
									</button>
								</form>
							)
						}}
					/>
				</div>
			</div>
		</>
	)
}

export default ProfileInfoForm
