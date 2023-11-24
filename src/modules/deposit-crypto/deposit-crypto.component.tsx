/* eslint-disable complexity */
import {
	FormikProvider,
	useFormik,
} from 'formik'
import type {
	SelectChangeEvent,
} from '@mui/material'
import {
	MenuItem,
} from '@mui/material'
import React from 'react'
import * as css from './deposit-crypto.styled'
import TextBtn from '../../shared/components/text-btn/text-btn.component'
import BalanceInput from '../../shared/components/balance-input/balance-input.component'
import FundingInput from '../../shared/components/funding-input/funding-input.component'
import Select from '../../shared/components/select/select.component'
import {
	services,
} from '../../shared/services/http-factory.service'
import {
	depositCryptoSchema,
} from '../../validation/funds.validation'
import {
	CRYPTO_TOKENS,
} from '../../shared/types/types'
import {
	trimObject,
} from '../../shared/utils/trim-object-values.util'
import type {
	IDepositCryptoForm,
} from './deposit-crypto.types'
import {
	initialValues,
} from './deposit-crypto.const'
import {
	criptoCurrencys,
} from '../funding/funding.const'
import ClipboardField from '../../shared/components/clipboard-field/clipboard-field.component'

const userService = services.userHttpService

const WithdrawCrypto: React.FC = () => {
	const [isLoading,setIsLoading,] = React.useState(false,)
	const [isReadOnly, setIsReadOnly,] = React.useState(false,)
	const [userAccounts, setUserAccounts,] = React.useState<Array<IDepositCryptoForm>>([],)
	const [savedAccountsValues, setSavedAccountsValues,] = React.useState<IDepositCryptoForm>(initialValues,)
	const [credentials, setCredentials,] = React.useState<string>('',)
	React.useEffect(() => {
		getBankAccounts()
	}, [],)

	const toogleIbanInput = (): void => {
		setIsReadOnly((value,) => {
			return !value
		},)
	}

	const getBankAccounts = async(): Promise<void> => {
		try {
			const res = await userService.get<Array<IDepositCryptoForm>>('users/wallets',)
			setUserAccounts(res,)
		} catch (e) {
			setUserAccounts([],)
		}
	}

	const getCredentials = async({
		address,
		amount,
		currency: coin,
		network,
	}: IDepositCryptoForm,): Promise<void> => {
		setIsLoading(true,)
		userService.post<{address:string},{coin:CRYPTO_TOKENS,
			address:string,
			amount:number,
			network: string,}>('exchange/get-crypto-deposit-credentials', {
				coin,
				address,
				amount,
				network,
			},).then((res,) => {
				setCredentials(res.address,)
			},)
			.finally(() => {
				setIsLoading(false,)
			},)
	}
	const onSubmit = async(userData: IDepositCryptoForm,): Promise<void> => {
		const values = trimObject(userData,)
		getCredentials(values,)
	}
	const formik = useFormik<IDepositCryptoForm>({
		initialValues:      savedAccountsValues, onSubmit, enableReinitialize: true,
		validationSchema:   depositCryptoSchema,
	},)
	const {
		amount,
		currency,
		network,
	} = formik.values
	const isDisabled = !amount || amount === 0 || isLoading || !formik.isValid

	const openFields = (e: SelectChangeEvent<unknown>,): void => {
		const formValues = userAccounts.find(({
			address,
		},) => {
			return address === e.target.value
		},)
		if (formValues) {
			setSavedAccountsValues({
				...formValues,
				userAddress: formValues.address,
				amount,
				currency,
				network,
			},)
		} else {
			setSavedAccountsValues({
				...initialValues,
				amount,
				currency,
				network,
			},)
		}
		setIsReadOnly(true,)
	}
	const defaultNoneItem = <MenuItem key={'none'} value=''>
		<span>None</span>
	</MenuItem>

	const selectItems = userAccounts.map(({
		address,
	},) => {
		return <MenuItem key={address} value={address}>
			<span>{address}</span>
		</MenuItem>
	},)
	return <FormikProvider value={formik}>
		<>
			<form className={css.formWrapper} onSubmit={formik.handleSubmit}>
				<BalanceInput defaultValue={CRYPTO_TOKENS.BTC} currencys={criptoCurrencys} revalidate={isLoading} currentCurrency={formik.values.currency} />

				{formik.values.currency === CRYPTO_TOKENS.BTC && <Select
					defaultValue='ETH'
					name='network'
					className={css.networkSelect}
					MenuProps={{
						disableScrollLock: true,
					}}
				>
					<MenuItem value='ETH'>Ethereum</MenuItem>
					<MenuItem value='LIGHTNING'>Lighting</MenuItem>
				</Select>}

				<div className={css.addressInput}>
					{isReadOnly && <button className={css.addressInputButton} onClick={toogleIbanInput} type='button'></button>}
					<FundingInput maxLength={42} readOnly={isReadOnly} label='Withdrawal Wallet Address' name='address' placeholder='Enter Public Address (0x)'/>
				</div>

				<div className={css.ibanSelectWrapper}>
					<span>or</span>
					<Select MenuProps={{
						disableScrollLock: true,
					}}
					displayEmpty
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					renderValue={(selected: any,): any => {
						if (selected.length === 0) {
							return <span>Select from Saved Wallet Address</span>
						}
						return <span className={css.currencySelectedValue}>{selected}</span>
					}}
					className={css.currencySelect}
					name='userAddress'
					onSelectSelected={openFields}
					>
						{[defaultNoneItem,].concat(selectItems,)}
					</Select>
				</div>
				{credentials && <ul className={css.credentialWrapper}>
					<ClipboardField description='Deposit Wallet Address' value={credentials} />
				</ul>}
				<TextBtn className={css.submitButton} text='Deposit' type='submit' loading={isLoading} disabled={isDisabled} />
			</form>
		</>
	</FormikProvider>
}
export default WithdrawCrypto