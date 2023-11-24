/* eslint-disable no-unused-vars */
import React, {
	useState,
} from 'react'
import {
	ModalContainer, WindowTitle, InputsContainer, ArrowImg, operationButton,
} from './swap-utils.styled'
import CryptoInputBox from '../cryptoInput/custom-crypto-input.component'
import TwoArrowIcons from '../../../../../../../assets/icons/twoArrowsIcon.svg'

const SwapWindowComponent: React.FC = () => {
	const [value1, setValue1,] = useState(0,)
	const [value2, setValue2,] = useState(0,)
	return <div className={ModalContainer}>
		<div className={WindowTitle}>
			<h3>Swap</h3>
		</div>
		<div className={InputsContainer}>
			<CryptoInputBox setInput={setValue1} balance={0} name='swapCoin1' cost={5} />
			<img src={TwoArrowIcons} alt='Two Arrow Icons' className={ArrowImg} />
			<CryptoInputBox setInput={setValue2} balance={0} name='swapCoin2' cost={5 } />
		</div>
		<div style={{
			width:          '100%', height:         '100%',
			display:        'flex', justifyContent: 'center',
		}}>
			<button className={operationButton(false,)}>Swap</button>
		</div>
	</div>
}

export default SwapWindowComponent