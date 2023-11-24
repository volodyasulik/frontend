import {
	CRYPTO_TOKENS,
} from '../../shared/types/types'
import type {
	IDepositCryptoForm,
} from './deposit-crypto.types'

export const initialValues: IDepositCryptoForm = {
	currency:    CRYPTO_TOKENS.BTC,
	amount:      0,
	address:     '',
	userAddress: '',
	network:     'ETH',
}