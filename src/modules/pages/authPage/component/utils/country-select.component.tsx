/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	useEffect,
	useState,
} from 'react'
import Select from 'react-select'
import {
	Label, customStyles, customTheme, ErrorMessage,
} from './country-select.styled'
import {
	countries,
} from './country-list.utils'
import CountryListOption from './country-list-option.component'
import useInputValues from '../../../../../store/input-data'

interface ISelect {
    value: string;
    label: string
}
interface IProps {
    setSelectedCountry: (options: any) => void,
    value: string | ISelect,
    error: boolean
}
const CountrySelect: React.FC<IProps> = ({
	setSelectedCountry, value, error,
},) => {
	const {
		counrtyInStore, setCountry,
	} = useInputValues()
	const [stateValue, setValue,] = useState(value,)
	useEffect(() => {
		if (counrtyInStore) {
			setValue(counrtyInStore,)
			setSelectedCountry(counrtyInStore,)
		} else {
			setValue(value,)
			setSelectedCountry(value,)
		}
	}, [value,counrtyInStore,],)
	return (
		<div>
			<label className={Label}>Country</label>
			<Select
				styles={customStyles}
				theme={customTheme}
				options={countries}
				value={stateValue}
				components={{
					Option: CountryListOption,
				}}
				placeholder='Select Country'

				onChange={(selectedOption: any,):void => {
					setSelectedCountry(selectedOption,)
					setCountry(selectedOption,)
					setValue(selectedOption,)
				}}
			/>
			{error && <div className={ErrorMessage}>Country is required</div>}
		</div>
	)
}

export default CountrySelect