import React from 'react'
import * as css from './clipboard-field.styled'
import {
	useCopyToClipboard,
} from '../../hooks/useCopyToClipboard'

interface IProps {
    description?: string
    value?:string|null
}

const ClipboardField: React.FC<IProps> = ({
	value,description,
},) => {
	const [setCopiedText,] = useCopyToClipboard()
	const coppyToClipboard = (): void => {
		setCopiedText(value ?? '',)
	}

	return <li className={css.clipboardField} >
		{description && <span className={css.clipboardFieldDescription}>{description}</span>}
		<div className={css.clipboardFieldWrapper}>
			<span className={css.clipboardFieldValue}>{value}</span>
			<button type='button' className={css.copyButton} onClick={coppyToClipboard}><div className={css.icon}></div></button>
		</div>
	</li>
}
export default ClipboardField
