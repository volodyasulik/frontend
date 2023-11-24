import {
	FIAT_TOKENS,
} from '../../shared/types/types'
import type {
	IWithdrawFiatForm,
} from './withdraw-fiat.types'

export const initialValues: IWithdrawFiatForm = {
	currency: FIAT_TOKENS.EUR,
	amount:   0,
	iban:     '',
	userIban: '',
}