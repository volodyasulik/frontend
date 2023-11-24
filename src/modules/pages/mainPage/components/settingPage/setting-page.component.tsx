import React, {
	useState,
} from 'react'
import {
	SettingPageContainer, TitleUserContainer, InputsContainer, CustomSwitch, SwitchContainer, KycControl, radioButtonsContainer, AddressBoxes, SaveButton,
} from './setting-page.styled'
import UserTitleContainer from '../utils/menuUtils/user-title.component'
import EditingInput from '../utils/settingUtils/settingInput/editing-input.component'
import PasswordChangeButton from '../utils/settingUtils/changePassword/change-password-button.component'
import RadioButton from '../utils/settingUtils/radioButton/radio-button.component'
import WalletAddressesBox from '../utils/settingUtils/addressesBoxes/walletAdresses/wallet-adresses.component'
import IbanAddressesBox from '../utils/settingUtils/addressesBoxes/IbanAdresses/iban-adresses.component'

const SettingPageComponent: React.FC = () => {
	const [email, setEmail,] = useState('name@email.com',)
	const [phone, setPhone,] = useState('',)
	const [isEmailKyc, setIsEmailKyc,] = useState(true,)
	const [isPhoneKyc, setIsPhoneKyc,] = useState(false,)
	const [kyc, setKyc,] = useState(false,)
	// eslint-disable-next-line no-console
	console.log(email, phone,)
	const switchHandler = (event: React.ChangeEvent<HTMLInputElement>,): void => {
		setKyc(event.target.checked,)
	}
	return <div className={SettingPageContainer}>
		<UserTitleContainer style={TitleUserContainer} />
		<div className={InputsContainer}>
			<EditingInput setValue={setEmail} name='text' label='Email Adress' value={email} />
			<EditingInput setValue={setPhone} name='text' label='Email Adress' placeholder='Enter your Phone Number' />
		</div>
		<PasswordChangeButton />
		<div className={KycControl}>
			<div className={SwitchContainer}>
				<CustomSwitch onChange={switchHandler} checked={kyc} />
				<label>Two-Factor Authentication</label>
			</div>
			<div className={radioButtonsContainer(kyc,)}>
				<RadioButton label='Email' setRadio={kyc ?
					setIsEmailKyc :
					undefined} radio={kyc && isEmailKyc} />
				<RadioButton label='Phone Number' setRadio={kyc ?
					setIsPhoneKyc :
					undefined} radio={kyc && isPhoneKyc} />
			</div>

		</div>
		<div className={AddressBoxes}>
			<IbanAddressesBox />
			<WalletAddressesBox />
		</div>
		<button className={SaveButton}>Save Changes</button>
	</div>
}

export default SettingPageComponent