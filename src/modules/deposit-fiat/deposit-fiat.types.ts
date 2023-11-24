import type {
	IForm,
} from '../../shared/components/balance-input/balance-input.types'
import type {
	FIAT_TOKENS,
} from '../../shared/types/types'

export interface IBankAccountCredentials{
    currency: FIAT_TOKENS
    status: string
    internalAccountId: string
    bankCountry: string
    bankAddress: string
    iban: string
    bic: string
    accountNumber: string
    bankName: string
    bankAccountHolderName: string
    provider: string
    paymentType: string|null
    domestic: string|null
    routingCodeEntries: Array<string>
    payInReference: string|null
    reference: string
}

export type IDepositFiatForm = IForm<FIAT_TOKENS>