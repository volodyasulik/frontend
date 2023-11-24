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
import * as css from './withdraw-crypto.styled'
import TextBtn from '../../shared/components/text-btn/text-btn.component'
import BalanceInput from '../../shared/components/balance-input/balance-input.component'
import FundingInput from '../../shared/components/funding-input/funding-input.component'
import Select from '../../shared/components/select/select.component'
import {
	services,
} from '../../shared/services/http-factory.service'
import {
	createWithdrawCryptoSchema,
} from '../../validation/funds.validation'
import {
	CRYPTO_TOKENS,
} from '../../shared/types/types'
import {
	trimObject,
} from '../../shared/utils/trim-object-values.util'
import type {
	IWithdrawCryptoForm,
} from './withdraw-crypto.types'
import {
	initialValues,
} from './withdraw-crypto.const'
import {
	criptoCurrencys,
} from '../funding/funding.const'

const balanceService = services.balanceHttpService
const userService = services.userHttpService

const WithdrawCrypto: React.FC = () => {
	const [isLoading,setIsLoading,] = React.useState(false,)
	const [isReadOnly, setIsReadOnly,] = React.useState(false,)
	const [userAccounts, setUserAccounts,] = React.useState<Array<IWithdrawCryptoForm>>([],)
	const [savedAccountsValues, setSavedAccountsValues,] = React.useState<IWithdrawCryptoForm>(initialValues,)
	const [balance, setBalance,] = React.useState<Record<string, string>>({
	},)
	const [currentCurrency, setCurrentCurrency,] = React.useState<CRYPTO_TOKENS>(savedAccountsValues.currency ,)
	const validationSchema = React.useMemo(() => {
		return createWithdrawCryptoSchema(Number.parseFloat(balance[currentCurrency]!,),)
	}, [currentCurrency,balance,],)

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
			const res = await userService.get<Array<IWithdrawCryptoForm>>('users/wallets',)
			setUserAccounts(res,)
		} catch (e) {
			setUserAccounts([],)
		}
	}

	const withdrawFiat = async(data: {amount:number, coin: CRYPTO_TOKENS,address:string, networkAddress:string},): Promise<void> => {
		setIsLoading(true,)
		balanceService.post('balance/withdraw-crypto', data,).finally(() => {
			setIsLoading(false,)
		},)
	}

	const onSubmit = async(userData: IWithdrawCryptoForm,): Promise<void> => {
		const {
			amount,currency:coin,address,networkAddress,
		} = trimObject(userData,)
		withdrawFiat({
			amount,
			address,
			coin,
			networkAddress,
		},)
	}
	const formik = useFormik<IWithdrawCryptoForm>({
		initialValues:      savedAccountsValues, onSubmit, enableReinitialize: true,
		validationSchema,
	},)

	const {
		amount,
		currency,
		networkAddress,
	} = formik.values
	const currentBalance = balance[currency]
	const isDisabled = !amount || amount === 0 || isLoading || !currentBalance || Number.parseFloat(currentBalance,) < amount || !formik.isValid
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
				networkAddress,
			},)
		} else {
			setSavedAccountsValues({
				...initialValues,
				amount,
				currency,
				networkAddress,
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
				<BalanceInput defaultValue={CRYPTO_TOKENS.BTC} getCurrency={setCurrentCurrency} currencys={criptoCurrencys} revalidate={isLoading} currentCurrency={formik.values.currency} getBalance={setBalance} />

				{formik.values.currency === CRYPTO_TOKENS.BTC && <Select
					defaultValue='ETH'
					name='networkAddress'
					className={css.networkSelect}
					MenuProps={{
						disableScrollLock: true,
					}}
				>
					<MenuItem value='ETH'>Ethereum</MenuItem>
					<MenuItem value='LIGHTNING'>Lighting</MenuItem>
				</Select>}

				<div className={css.addressInput}>
					{isReadOnly && <button className={css.currencyInputButton} onClick={toogleIbanInput} type='button'></button>}
					<FundingInput maxLength={42} readOnly={isReadOnly} label='Withdrawal Wallet Address' name='address' placeholder='Enter Public Address (0x)'/>
				</div>

				<div className={css.currencySelectWrapper}>
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
				<TextBtn className={css.submitButton} text='Withdraw' type='submit' loading={isLoading} disabled={isDisabled} />
			</form>
		</>
	</FormikProvider>
}
export default WithdrawCrypto