export type PaginationResult<T> = {
	total: number
	list: Array<T>
}

export interface IUserBalance {
    BTC: string
    ETH:string
    EUR:string
    GBP:string
    USDC:string
    USDT:string
    id:string
    userId:string
}

export enum FIAT_TOKENS {
    GBP = 'GBP',
    EUR = 'EUR',
}

export enum CRYPTO_TOKENS {
    USDT = 'USDT',
    USDC = 'USDC',
    BTC = 'BTC',
    ETH = 'ETH',
    LN = 'LN'
}