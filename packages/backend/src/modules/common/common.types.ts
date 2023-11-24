import type {
	User,
} from '@prisma/client'

export interface IPagination {
    totalCount: number
    currentPage: number
    totalCountOfPages: number
}

export interface IRequest {
    user : User
}

export enum ASSETS {
	EUR =  'ZEUR',
	GBP =  'ZGBP',
	BTC =  'XXBT',
	ETH =  'XETH',
	USDC= 'USDC',
	USDT = 'USDT',
	LN=   '',
}

export enum CRYPTO_TOKENS {
    USDT = 'USDT',
    USDC = 'USDC',
    BTC = 'BTC',
    ETH = 'ETH',
    LN = 'LN',
}

export enum FIAT_TOKENS {
    GBP = 'GBP',
    EUR = 'EUR',
    USD = 'USD',
}

export enum TOKENS {
    USDT = 'USDT',
    USDC = 'USDC',
    BTC = 'BTC',
    ETH = 'ETH',
    GBP = 'GBP',
    EUR = 'EUR',
    USD = 'USD',
}

export enum NETWORK_LIST {
    BSC = 'BSC',
    ETH = 'ETH',
    ARBITRUM = 'ARBITRUM',
    BNB = 'BNB',
    BASE = 'BASE',
    OPTIMISM = 'OPTIMISM',
    ZKSYNCERA = 'ZKSYNCERA',
    BTC = 'BTC',
    SEGWITBTC = 'SEGWITBTC',
    LIGHTNING = 'LIGHTNING',
    EOS = 'EOS',
    NEAR = 'NEAR',
    AVAXC = 'AVAXC',
    STATEMINT = 'STATEMINT',
    MATIC = 'MATIC',
    SOL = 'SOL',
    XTZ = 'XTZ',
    TRX = 'TRX',
    ALGO = 'ALGO',
    RON = 'RON',
    XLM = 'XLM',
    FIAT_MONEY='FIAT_MONEY'
}

