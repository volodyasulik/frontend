/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	useState,
} from 'react'

import Select from 'react-select'

import BSCIcon from '../../../../../../../../assets/icons/wallet/BSC.svg'
import ETHIcon from '../../../../../../../../assets/icons/wallet/ETH.svg'
import {
	customStyles, customTheme,
} from './coin-select.styled'
import CustomOption from './option-coin-select.component'
import CustomSingleValue from './single-value-coin-selector'

const CoinSelect: React.FC<{ setSelectedCoin: (options: any) => void, value: string }> = ({
	setSelectedCoin,
},) => {
	const [isSelected, setIsSelected,] = useState(false,)

	const options = [{
		label: 'BSC', value: 'BSC', icon: BSCIcon,
	},{
		label: 'ETH', value: 'ETH', icon: ETHIcon,
	},]

	return <>
		<Select styles={customStyles(isSelected,)}
			theme={customTheme}
			placeholder='Select coin'
			components={{
				SingleValue: CustomSingleValue,
				Option:      CustomOption,
			}}
			isSearchable={false}
			options={options}
			onChange={
				(selectedOption: any,): void => {
					setIsSelected(true,)
					setSelectedCoin(selectedOption.value,)
				}

			}/>
	</>
}

export default CoinSelect