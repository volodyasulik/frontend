import React from 'react'
import RadioButtonTrue from '../../../../../../../assets/icons/radioTrue.svg'
import RadioButtonFalse from '../../../../../../../assets/icons/radioFalse.svg'
import {
	RadioButtonStyled,
} from './radio-button.styled'

interface IProps {
    label: string;
    radio: boolean;
    setRadio?: (radio: boolean) => void
}

const RadioButton: React.FC<IProps> = ({
	label, radio, setRadio,
},) => {
	return <div className={RadioButtonStyled}>
		<img src={radio ?
			RadioButtonTrue :
			RadioButtonFalse} onClick={(): void => {
			if (setRadio) {
				setRadio(!radio,)
			}
		}} />
		<label>{label}</label>
	</div>
}

export default RadioButton