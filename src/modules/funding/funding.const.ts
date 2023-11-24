import {
	RouterKeys,
} from '../../router/keys'
import type {
	ILinkConfig,
} from '../../shared/components/tab-navigation/tab-navigation.component.types'
import {
	CRYPTO_TOKENS, FIAT_TOKENS,
} from '../../shared/types/types'

import btcIco from '../../assets/icons/dashboard/btc.svg'
import ethIco from '../../assets/icons/dashboard/eth.svg'
import usdcIco from '../../assets/icons/dashboard/usdc.svg'
import usdtIco from '../../assets/icons/dashboard/usdt.svg'
// import lnIco from '../../assets/icons/dashboard/ln.svg'

export const tabNavConfig = [
	{
		to:    RouterKeys.DEPOSIT,
		title: 'Deposit',
	},
	{
		to:    RouterKeys.WITHDRAW,
		title: 'Withdraw',
	},
]

export const currencyTypes = (suffix:string,):Array<ILinkConfig> => {
	return [
		{
			to: `${suffix}/${RouterKeys.CRYPTO}`, title: 'Crypto',
		},
		{
			to: `${suffix}/${RouterKeys.FIAT}`, title: 'Fiat',
		},
	]
}

export const criptoCurrencys = [
	{
		value:  CRYPTO_TOKENS.BTC,
		title:  'BTC',
		symbol: 'BTC',
		icon:   btcIco,

	},
	{
		value:  CRYPTO_TOKENS.ETH,
		title:  'ETH',
		symbol: 'ETH',
		icon:   ethIco,
	},
	{
		value:  CRYPTO_TOKENS.USDC,
		title:  'USDC',
		symbol: 'USDC',
		icon:   usdcIco,
	},
	{
		value:  CRYPTO_TOKENS.USDT,
		title:  'USDT',
		symbol: 'USDT',
		icon:   usdtIco,
	},
	// 	{
	// 	value:  CRYPTO_TOKENS.LN,
	// 	title:  'LN',
	// 	symbol: 'LN',
	// 	icon:   lnIco,
	// },
]

export const fiatCurrencys = [
	{
		value:  FIAT_TOKENS.EUR,
		title:  'EUR',
		symbol: '€',
	},
	{
		value:  FIAT_TOKENS.GBP,
		title:  'GBP',
		symbol: '£',
	},
]