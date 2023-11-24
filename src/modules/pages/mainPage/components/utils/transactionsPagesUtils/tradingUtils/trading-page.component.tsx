/* eslint-disable no-unused-vars */
import React, {
	useState,
} from 'react'
import {
	ModalContainer, WindowTitle, InputsContainer, operationButton,
} from '../global-pages.styled'
import CryptoInputBox from '../cryptoInput/custom-crypto-input.component'
import BottomArrowIcons from '../../../../../../../assets/icons/bottomArrow.svg'
import {
	TradingModalContainer,
	ArrowImg,
	TradingTitle,
	TradingButtons,
	tradingButton,
} from './trading-page.styled'

const TradingWindowComponent: React.FC = () => {
	const [value1, setValue1,] = useState(0,)
	const [value2, setValue2,] = useState(0,)
	const [isSell,setIsSell,] = useState(true,)
	return <div className={`${ModalContainer} ${TradingModalContainer}`}>
		<div>
			<div className={`${WindowTitle} ${TradingTitle}`}>
				<h3>Trading</h3>
			</div>
		</div>
		<div className={TradingButtons}>
			<div onClick={(): void => {
				setIsSell(!isSell,)
			}} className={tradingButton(isSell,)}>Sell</div>
			<div onClick={(): void => {
				setIsSell(!isSell,)
			}} className={tradingButton(!isSell,)}>Buy</div>
		</div>

		<div className={InputsContainer}>
			<CryptoInputBox setInput={setValue1} balance={0} name='tradingCoin1' cost={5} />
			<img src={BottomArrowIcons} alt='Two Arrow Icons' className={ArrowImg} />
			<CryptoInputBox setInput={setValue2} balance={0} name='tradingCoin2' cost={5 } />
		</div>
		<div style={{
			width:          '100%', height:         '100%',
			display:        'flex', justifyContent: 'center',
		}}>
			<button className={operationButton(true,)}>{ isSell ?
				'Sell' :
				'Buy'}</button>
		</div>

	</div>
}

export default TradingWindowComponent