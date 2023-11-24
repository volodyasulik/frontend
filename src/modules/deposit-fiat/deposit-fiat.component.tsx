import {
	FormikProvider,
	useFormik,
} from 'formik'
import React from 'react'
import * as css from './deposit-fiat.styled'
import {
	initialValues,
} from './deposit-fiat.const'
import {
	services,
} from '../../shared/services/http-factory.service'
import {
	FIAT_TOKENS,
} from '../../shared/types/types'
import {
	OPEN_PAYD_ROUTES,
} from '../../shared/constants/back-end-routes.const'
import type {
	IBankAccountCredentials, IDepositFiatForm,
} from './deposit-fiat.types'
import TextBtn from '../../shared/components/text-btn/text-btn.component'
import BalanceInput from '../../shared/components/balance-input/balance-input.component'
import ClipboardField from '../../shared/components/clipboard-field/clipboard-field.component'
import {
	depositFiatSchema,
} from '../../validation/funds.validation'
import {
	fiatCurrencys,
} from '../funding/funding.const'
const openPaydService = services.openPaydHttpService

const DepositFiat: React.FC = () => {
	const [loading, setLoading,] = React.useState(false,)
	const [credentials, setCredentials,] = React.useState<IBankAccountCredentials|null>(null,)
	const getCredentials = async(currency: FIAT_TOKENS,): Promise<IBankAccountCredentials> => {
		return openPaydService.get<IBankAccountCredentials>(OPEN_PAYD_ROUTES.CREDENTIALS.replace(':currency', currency,),)
	}
	const onSubmit = async(values:IDepositFiatForm,): Promise<void> => {
		setLoading(true,)
		getCredentials(values.currency,)
			.then((newCreds,) => {
				setCredentials(newCreds,)
			},)
			.finally(() => {
				setLoading(false,)
			},)
	}

	const formik = useFormik<IDepositFiatForm>({
		initialValues, onSubmit, enableReinitialize: true,
		validateOnMount:    true,
		initialErrors:      {
			amount: 'amount must be greater than or equal to 0.1',
		},
		validationSchema:   depositFiatSchema,
	},)

	return <FormikProvider value={formik}>
		<form className={css.formWrapper} onSubmit={formik.handleSubmit}>
			<BalanceInput defaultValue={FIAT_TOKENS.EUR} currencys={fiatCurrencys} currentCurrency={formik.values.currency} />
			{credentials && <ul className={css.credentialWrapper}>
				<ClipboardField description='PaymentType' value={credentials.paymentType} />
				<ClipboardField description='ID' value={credentials.internalAccountId} />
				<ClipboardField description='Bank Account Holder Name' value={credentials.bankAccountHolderName} />
				<ClipboardField description='IBAN' value={credentials.iban} />
				<ClipboardField description='BIC/SWIFT' value={credentials.bic} />
				<ClipboardField description='Reference: REQUIRED' value={credentials.reference} />
				<ClipboardField description='Bank name' value={credentials.bankName} />
				<ClipboardField description='Bank address' value={credentials.bankAddress} />
			</ul>}
			<TextBtn className={css.submitButton} text='Deposit' type='submit' loading={loading} disabled={loading || (!formik.isValid)} />
		</form>
	</FormikProvider>
}
export default DepositFiat