import * as Yup from 'yup'
import {
	CRYPTO_TOKENS,
	FIAT_TOKENS,
} from '../shared/types/types'

export const NAME_REGEX = /^[a-zA-Z ]*$/
export const WALLET_REGEX = /0x[a-fA-F0-9]{40}/i
export const IBAN_REGEX = /^[A-Z]{2}\d{2}[A-Za-z0-9]{11,30}$/

export const depositFiatSchema = Yup.object({
	amount: Yup.number().min(0.1,)
		.required(),
	currency: Yup.string().required()
		.oneOf(Object.values(FIAT_TOKENS,),),
},)

export const createWithdrawFiatSchema = (max: number,):Yup.AnyObjectSchema => {
	return Yup.object({
		amount: Yup
			.number()
			.min(0.1,)
			.max(max,)
			.required(),
		currency: Yup
			.string()
			.required()
			.oneOf(Object.values(FIAT_TOKENS,),),
		bankAddress: Yup
			.string()
			.required()
			.trim(),
		bic: Yup
			.string()
			.required()
			.trim(),
		fullName: Yup
			.string()
			.required()
			.trim(),
		iban: Yup
			.string()
			.matches(IBAN_REGEX, 'Must be correct Iban',)
			.trim()
			.required(),
	},)
}

export const depositCryptoSchema = Yup.object({
	amount: Yup
		.number()
		.min(0.00001,)
		.required(),
	currency: Yup
		.string()
		.required()
		.oneOf(Object.values(CRYPTO_TOKENS,),),
	address: Yup
		.string()
		.required()
		.matches(WALLET_REGEX, 'Must be correct address',),
	network: Yup
		.string()
	,
},)

export const createWithdrawCryptoSchema = (max: number,):Yup.AnyObjectSchema => {
	return Yup.object({
		amount: Yup
			.number()
			.min(0.00001,)
			.max(max,)
			.required(),
		currency: Yup
			.string()
			.required()
			.oneOf(Object.values(CRYPTO_TOKENS,),),
		address: Yup
			.string()
			.required()
			.matches(WALLET_REGEX, 'Must be correct address',),
		network: Yup
			.string(),

	},)
}