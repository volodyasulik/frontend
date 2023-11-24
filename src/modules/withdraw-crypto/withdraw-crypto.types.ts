import type {
	IForm,
} from '../../shared/components/balance-input/balance-input.types'
import type {
	CRYPTO_TOKENS,
} from '../../shared/types/types'

export interface IWithdrawCryptoForm extends IForm<CRYPTO_TOKENS> {
    address: string
    userAddress: string
    networkAddress: string
}