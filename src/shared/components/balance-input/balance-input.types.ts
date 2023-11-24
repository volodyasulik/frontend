import type {
	Dispatch, SetStateAction,
} from 'react'

export interface IForm<T> {
    currency: T
    amount: number
}

interface ICurencys<T> {
    value: T
    title: string
    symbol: string
    icon?: string
}

export interface IProps<T> {
    currencys: Array<ICurencys<T>>
    currentCurrency: T
    getBalance?: Dispatch<SetStateAction<Record<string, string>>>
    getCurrency?: Dispatch<SetStateAction<T>>
    defaultValue:T
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    revalidate?:any
}