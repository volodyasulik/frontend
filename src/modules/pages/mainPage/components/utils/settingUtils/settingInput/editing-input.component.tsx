import React, {
	useState,
} from 'react'
import EditingIcon from '../../../../../../../assets/icons/editingIcon.svg'
import {
	inputContainer, Label, InputBox,
} from './editing-input.styled'

interface IProps {
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;
    setValue: (value: string) => void
    margin?: boolean
    width?: string
}
const EditingInput: React.FC<IProps> = ({
	name, setValue, label, placeholder, value, margin = true,width,
},) => {
	const [inputDisabled, setInputDisabled,] = useState(!placeholder,)
	return <div className={margin ?
		InputBox :
		''}>
		{label && <label className={Label}>{label}</label>}
		<div className={inputContainer(width,)}>
			<input onChange={(e,): void => {
				setValue(e.target.value,)
			}} name={name} disabled={inputDisabled} placeholder={placeholder} value={value}/>
			{
				placeholder ?
					<></> :
					<img src={EditingIcon} alt='Editing Icon' onClick={(): void => {
						setInputDisabled(!inputDisabled,)
					}} />
			}

		</div>
	</div>
}

export default EditingInput