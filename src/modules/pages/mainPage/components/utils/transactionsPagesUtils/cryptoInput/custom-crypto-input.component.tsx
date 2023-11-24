import React, {
	useState,
} from 'react'
import CoinSelect from './coinSelector/coins-select.component'
import {
	BalanceDescription,
	Box,
	InputContainer, InputsCointainer, TwoLineContainer,
} from './crypto-input.styled'

interface IProps {
    balance: number;
    name: string;
    setInput: (value: number) => void;
    cost: number
}

const CryptoInputBox: React.FC<IProps> = ({
	balance, name, setInput,cost,
},) => {
	const [value, setValue,] = useState('',)
	const [coin, setCoin,] = useState('',)

	const valueInputHandler = (e: React.ChangeEvent<HTMLInputElement>,): void => {
		const inputValue = e.target.value
		setValue(inputValue,)
		setInput(Number(inputValue,),)
	}
	return <div className={Box}>
		<div className={InputsCointainer}>
			<div className={InputContainer}>
				<input name={name} type='number' inputMode='none' value={value} onChange={valueInputHandler} placeholder='0'/>
				<div>
					{`$ ${cost}`}
				</div>
			</div>
			<div>
				<CoinSelect setSelectedCoin={setCoin} value={coin} />
			</div>
		</div>
		<div className={TwoLineContainer}>
			<div>

			</div>
			<div className={BalanceDescription}>
				{`Balance: ${balance === 0 || balance ?
					balance :
					'0.0'} ${coin}`}
			</div>
		</div>
	</div>
}

export default CryptoInputBox