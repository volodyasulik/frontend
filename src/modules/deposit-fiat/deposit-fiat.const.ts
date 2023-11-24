import {
	FIAT_TOKENS,
} from '../../shared/types/types'
import type {
	IDepositFiatForm,
} from './deposit-fiat.types'

export const initialValues: IDepositFiatForm = {
	currency: FIAT_TOKENS.EUR,
	amount:   0,
}