/* eslint-disable complexity */
import React, {
	useState,
	useEffect,
} from 'react'
import {
	ModalContainer, WindowTitle, InputsContainer, operationButton,
} from '../global-pages.styled'
import CryptoInputBox from '../cryptoInput/custom-crypto-input.component'
import RadioTrue from '../../../../../../../assets/icons/radioTrue.svg'
import RadioFalse from '../../../../../../../assets/icons/radioFalse.svg'
import {
	fundingModalContainer,
	FundingTitle,
	FundingButtons,
	fundingButton,
	SelectCurrency,
	OperationButtonContainer,
	IBANInputContainer,
	BorderContainer,
	TransactionInformationFormContainer,
} from './funding-page-window.styled'
import IBANSelect from './funding-select.component'
import EditingInput from '../../settingUtils/settingInput/editing-input.component'
import Input from '../../../../../../../shared/components/input/input.component'

interface ISelect {
	value: string;
	label: string
}

interface IProps {
    setHeight: (value:boolean) => void
}
const FundingWindowComponent: React.FC<IProps> = ({
	setHeight,
},) => {
	const [value, setValue,] = useState(0,)
	const [isDeposit, setIsDeposit,] = useState(true,)
	const [isCrypto, setIsCrypto,] = useState(true,)
	const [fundingStep, setFundingStep,] = useState(1,)
	const [windowHeight, setWindowHeight,] = useState('25.0625rem',)
	const [IBANSelectValue, setIBANSelect,] = useState<string | ISelect>('',)
	const [IBANInput, setIBANInput,] = useState('08923429018390128239021830912812WEA',)

	useEffect(() => {
		if (value >= 1) {
			setWindowHeight('36.375rem',)
			setFundingStep(2,)
			if ((IBANSelectValue as ISelect).value || IBANInput.length > 30) {
				setWindowHeight('53.25rem',)
				setFundingStep(3,)
				setHeight(true,)
			} else {
				setFundingStep(2,)
				setWindowHeight('36.375rem',)
			}
		} else {
			setFundingStep(1,)
			setWindowHeight('25.0625rem',)
		}
	}, [value,IBANSelectValue, IBANInput,],)

	const submitHandler = (): void => {
		// eslint-disable-next-line no-console
		console.log(IBANInput, (IBANSelectValue as ISelect).value, value,)
	}
	return <div className={`${ModalContainer} ${fundingModalContainer(windowHeight,)}`}>
		<div>
			<div className={`${WindowTitle} ${FundingTitle}`}>
				<h3>Funding</h3>
			</div>
		</div>
		<div className={FundingButtons}>
			<div onClick={(): void => {
				setIsDeposit(!isDeposit,)
			}} className={fundingButton(isDeposit,)}>Deposit</div>
			<div onClick={(): void => {
				setIsDeposit(!isDeposit,)
			}} className={fundingButton(!isDeposit,)}>Withdraw</div>
		</div>

		<div className={InputsContainer}>
			<div className={SelectCurrency} onClick={() : void => {
				setIsCrypto(!isCrypto,)
			}}>
				<img src={ isCrypto ?
					RadioTrue :
					RadioFalse} alt='Is Crypto'/>
				<p>Crypto</p>
			</div >
			<div className={SelectCurrency} onClick={() : void => {
				setIsCrypto(!isCrypto,)
			}}>
				<img src={ isCrypto ?
					RadioFalse :
					RadioTrue
				} alt='Is Fiat'/>
				<p>Fiat</p>
			</div>
			<CryptoInputBox setInput={setValue} balance={0} name='tradingCoin2' cost={5} />
			{
				fundingStep >= 2 && (
					<div className={IBANInputContainer}>
						<EditingInput setValue={setIBANInput} name={'IBAN'} placeholder={`${!IBANInput && 'Enter IBAN Address'}`} label='Withdrawal IBAN Address' value={IBANInput} margin={false} width={'100%'} />
						<div className={BorderContainer}>
							<span></span>
							<div >or</div>
							<span></span>
						</div>
						<IBANSelect setIBAN={setIBANSelect} value={IBANSelectValue} />
						<span></span>
					</div>
				)
			}
			{
				fundingStep >= 3 && (
					<div className={TransactionInformationFormContainer}>
						<span />
						<Input name='fullName' placeholder='Enter Full Name of the IBAN owner' label='Full Name' />
						<Input name='bankAddress' placeholder='Enter Bank Address of the IBAN owner' label='Bank Address' />
						<Input name='swift' placeholder='AAAA BB CC DDDD' label='BIC/SWIFT code' />
					</div>
				)
			}
			<div className={OperationButtonContainer}>
				<button onClick={submitHandler} className={operationButton(true,)}>{ isDeposit ?
					'Deposit' :
					'Withdraw'}</button>
			</div>
		</div>

	</div>
}

export default FundingWindowComponent