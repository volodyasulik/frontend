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
import * as css from './withdraw-fiat.styled'
import TextBtn from '../../shared/components/text-btn/text-btn.component'
import {
	initialValues,
} from './withdraw-fiat.const'
import type {
	IWithdrawFiatForm,
} from './withdraw-fiat.types'
import BalanceInput from '../../shared/components/balance-input/balance-input.component'
import FundingInput from '../../shared/components/funding-input/funding-input.component'
import Select from '../../shared/components/select/select.component'
import {
	services,
} from '../../shared/services/http-factory.service'
import {
	createWithdrawFiatSchema,
} from '../../validation/funds.validation'
import {
	FIAT_TOKENS,
} from '../../shared/types/types'
import {
	trimObject,
} from '../../shared/utils/trim-object-values.util'
import {
	fiatCurrencys,
} from '../funding/funding.const'

const balanceService = services.balanceHttpService
const userService = services.userHttpService

const WithdrawFiat: React.FC = () => {
	const [isLoading,setIsLoading,] = React.useState(false,)
	const [isReadOnly, setIsReadOnly,] = React.useState(false,)
	const [userAccounts, setUserAccounts,] = React.useState<Array<IWithdrawFiatForm>>([],)
	const [savedAccountsValues, setSavedAccountsValues,] = React.useState<IWithdrawFiatForm>(initialValues,)
	const [balance, setBalance,] = React.useState<Record<string, string>>({
	},)
	const [currentCurrency, setCurrentCurrency,] = React.useState<FIAT_TOKENS>(savedAccountsValues.currency ,)
	const validationSchema = React.useMemo(() => {
		return createWithdrawFiatSchema(Number.parseFloat(balance[currentCurrency]!,),)
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
			const res = await userService.get<Array<IWithdrawFiatForm>>('users/bank-accounts',)
			setUserAccounts(res,)
		} catch (e) {
			setUserAccounts([],)
		}
	}

	const withdrawFiat = async(data: IWithdrawFiatForm,): Promise<void> => {
		setIsLoading(true,)
		balanceService.post('balance/withdraw-fiat', data,).finally(() => {
			setIsLoading(false,)
		},)
	}

	const onSubmit = async(userData: IWithdrawFiatForm,): Promise<void> => {
		const values = trimObject(userData,)
		withdrawFiat(values,)
	}
	const formik = useFormik<IWithdrawFiatForm>({
		initialValues:      savedAccountsValues, onSubmit, enableReinitialize: true,
		validationSchema,
	},)

	const {
		amount,
		currency,
	} = formik.values
	const currentBalance = balance[currency]
	const isDisabled = !amount || amount === 0 || isLoading || !currentBalance || Number.parseFloat(currentBalance,) < amount || !formik.isValid

	const openFields = (e: SelectChangeEvent<unknown>,): void => {
		const formValues = userAccounts.find(({
			iban,
		},) => {
			return iban === e.target.value
		},)
		if (formValues) {
			setSavedAccountsValues({
				...formValues,
				userIban: formValues.iban,
				amount,
				currency,
			},)
		} else {
			setSavedAccountsValues({
				...initialValues,
				amount,
				currency,
			},)
		}
		if (!e.target.value) {
			setIsReadOnly(false,)
			return
		}
		setIsReadOnly(true,)
	}
	const defaultNoneItem = <MenuItem key={'none'} value=''>
		<span>None</span>
	</MenuItem>

	const selectItems = userAccounts.map(({
		iban,
	},) => {
		return <MenuItem key={iban} value={iban}>
			<span>{iban}</span>
		</MenuItem>
	},)
	return <FormikProvider value={formik}>
		<>
			<form className={css.formWrapper} onSubmit={formik.handleSubmit}>
				<BalanceInput defaultValue={FIAT_TOKENS.EUR} getCurrency={setCurrentCurrency} currencys={fiatCurrencys} revalidate={isLoading} currentCurrency={formik.values.currency} getBalance={setBalance}/>
				<div className={css.ibanInput}>
					{isReadOnly && <button className={css.ibanInputButton} onClick={toogleIbanInput} type='button'></button>}
					<FundingInput maxLength={34} readOnly={isReadOnly} label='Withdrawal IBAN Address' name='iban' placeholder='Enter IBAN Address'/>
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
							return <span>Select from Saved IBAN Address</span>
						}
						return selected
					}}
					className={css.currencySelect}
					name='userIban'
					onSelectSelected={openFields}
					>
						{[defaultNoneItem,].concat(selectItems,)}
					</Select>
				</div>

				<div className={css.inputsWrapper}>
					<FundingInput label='Full Name' name='fullName' placeholder='Enter Full Name of the IBAN owner'/>
					<FundingInput label='Bank Address' name='bankAddress' placeholder='Enter Bank Address of the IBAN owner'/>
					<FundingInput label='BIC/SWIFT code' name='bic' placeholder='AAAA BB CC DDDD'/>
				</div>
				<TextBtn className={css.submitButton} text='Withdraw' type='submit' loading={isLoading} disabled={isDisabled} />
			</form>
		</>
	</FormikProvider>
}
export default WithdrawFiat