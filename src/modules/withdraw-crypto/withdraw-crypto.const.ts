import {
	CRYPTO_TOKENS,
} from '../../shared/types/types'
import type {
	IWithdrawCryptoForm,
} from './withdraw-crypto.types'

export const initialValues: IWithdrawCryptoForm = {
	currency:       CRYPTO_TOKENS.BTC,
	amount:         0,
	address:        '',
	userAddress:    '',
	networkAddress:     'ETH',
}