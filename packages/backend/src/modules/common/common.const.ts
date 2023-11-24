import {
	NETWORK_LIST,
} from './common.types'
import {
	CRYPTO_TOKENS,
} from './common.types'

export const PHONE_REG_EXP = /^\+\d+$/
export const CODE_REG_EXP = /^\d+$/

export const ERR_MESSAGES = {
	WRONG_PASSWORD:                       'The password must contain only letters, numbers and symbols "-", "_".',
	WRONG_LOGIN:                          'The login must be valid email or phone number',
	WRONG_PHONE:                          'The phone number must begin with a "+" sign and contain the country code.',
	PHONE_IN_USE:                         'This phone number already in use',
	WRONG_NUMBER:                         'Wrong number',
	WRONG_CONFIRM_CODE:                   'Only numbers alowed',
	WRONG_CREDENTIALS:                    'Wrong credential',
	WRONG_CODE:                           'This code didn\'t correct, cheack your email/phone',
	SOMETHINS_WRONG:                      'Something wrong',
	USER_ALREADY_EXIST:                   'This user already created',
	PHONE_ALREADY_EXIST:                  'User with this phone already exists',
	LOGIN_ALREADY_EXIST:                  'User with this login already exists',
	EMAIL_ALREADY_EXIST:                  'User with this email already exists',
	USER_NOT_EXIST:                       'User not exist!',
	EVENT_NOT_EXIST:                      'Event not exist!',
	API_PROBLEM:                          'APIs problem',
	ONE_FIELD_REQUIRED:  'One field required',
	DUPLICATE_SYMBOLS:   'Symboll must be differents',
	NOT_ENOUGHT_BALANCE: 'Not enought balance for this operation',
	WRONG_CURRENCY:      'currency must be one of the following values: EUR, GBP',
}

export const CONFIRM_MESSAGES = {
	SENDED:    'Sended',
	DELETED:   'Deleted',
	COMPLITED: 'Complited',
	DONE:      'Done',
}

export const ASSETS = {
	EUR:  'ZEUR',
	GBP:  'ZGBP',
	BTC:  'XXBT',
	ETH:  'XETH',
	USDC: 'USDC',
	USDT: 'USDT',
	LN:   '',
}

export const qw :Record<CRYPTO_TOKENS, Array<NETWORK_LIST>> =   {
	[CRYPTO_TOKENS.ETH]: [
		NETWORK_LIST.BSC,
		NETWORK_LIST.ETH,
		NETWORK_LIST.ARBITRUM,
		NETWORK_LIST.BNB,
		NETWORK_LIST.BASE,
		NETWORK_LIST.OPTIMISM,
		NETWORK_LIST.ZKSYNCERA,
	],

	[CRYPTO_TOKENS.BTC]: [
		NETWORK_LIST.BSC,
		NETWORK_LIST.ETH,
		NETWORK_LIST.BTC,
		NETWORK_LIST.BNB,
		NETWORK_LIST.SEGWITBTC,
		NETWORK_LIST.LIGHTNING,
	],
	[CRYPTO_TOKENS.LN]: [
		NETWORK_LIST.BSC,
		NETWORK_LIST.ETH,
		NETWORK_LIST.BTC,
		NETWORK_LIST.BNB,
		NETWORK_LIST.SEGWITBTC,
		NETWORK_LIST.LIGHTNING,
	],
	[CRYPTO_TOKENS.USDT]: [
		NETWORK_LIST.BSC,
		NETWORK_LIST.EOS,
		NETWORK_LIST.NEAR,
		NETWORK_LIST.AVAXC,
		NETWORK_LIST.ARBITRUM,
		NETWORK_LIST.STATEMINT,
		NETWORK_LIST.BNB,
		NETWORK_LIST.ETH,
		NETWORK_LIST.OPTIMISM,
		NETWORK_LIST.MATIC,
		NETWORK_LIST.SOL,
		NETWORK_LIST.XTZ,
		NETWORK_LIST.TRX,
	],

	[CRYPTO_TOKENS.USDC]: [
		NETWORK_LIST.BSC,
		NETWORK_LIST.AVAXC,
		NETWORK_LIST.ALGO,
		NETWORK_LIST.ARBITRUM,
		NETWORK_LIST.BNB,
		NETWORK_LIST.ETH,
		NETWORK_LIST.OPTIMISM,
		NETWORK_LIST.MATIC,
		NETWORK_LIST.RON,
		NETWORK_LIST.SOL,
		NETWORK_LIST.XLM,
		NETWORK_LIST.TRX,
	],
}