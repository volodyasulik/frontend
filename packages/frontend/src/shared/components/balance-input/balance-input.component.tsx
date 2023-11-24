import React from 'react'
import * as css from './balance-input.styled'

import {
	MenuItem,
} from '@mui/material'
import {
	services,
} from '../../services/http-factory.service'
import type {
	IProps,
} from './balance-input.types'
import Input from '../input-field/input-field.component'
import Select from '../select/select.component'
import type {
	CRYPTO_TOKENS, FIAT_TOKENS,
} from '../../types/types'
const balanceService = services.balanceHttpService

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BalanceInput:React.FC<IProps<any>> = <T extends CRYPTO_TOKENS | FIAT_TOKENS>({
	currencys,
	currentCurrency,
	getBalance,
	getCurrency,
	revalidate,
	defaultValue,
}:IProps<T>,) => {
	const [balance, setBalance,] = React.useState<Record<string, string> | null>(null,)

	const currentAmount = balance?.[currentCurrency]
	const currentSymbol = currencys.find(({
		value,
	},) => {
		return value === currentCurrency
	},)?.symbol

	const getUserBalance = async(): Promise<void> => {
		const newBalance = await balanceService.get<Record<string, string>>('balance/self',)
		setBalance(newBalance,)
		getBalance?.(newBalance,)
		getCurrency?.(currentCurrency,)
	}

	React.useEffect(() => {
		getUserBalance()
	}, [currentCurrency, revalidate,],)

	return <div className={css.currencyWrapper}>
		<div className={css.currencyValue}>
			<Input
				className={css.amountInput}
				required
				type='number'
				name='amount'
			/>
			<Select MenuProps={{
				disableScrollLock: true,
			}}
			className={css.currencySelect}
			defaultValue={defaultValue}
			name='currency'>
				{currencys.map(({
					symbol,title,value,icon,
				},) => {
					return <MenuItem key={value} value={value}>
						{!icon && <span>{symbol}</span>}
						<span className={css.icon(icon,)}>{title}</span>
					</MenuItem>
				},)}
			</Select>
		</div>
		<p className={css.balance}>
            Balance: {currentSymbol} {currentAmount}
		</p>
	</div>
}
export default BalanceInput