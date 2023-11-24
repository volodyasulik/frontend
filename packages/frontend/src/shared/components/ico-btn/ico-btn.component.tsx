import * as React from 'react'

import {
	classBuilder,
} from '../../utils/class-builder.util'

import {
	btn,
} from './ico-btn.styles'

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	text: string;
	disabled?: boolean;
	loading?: boolean;
	type?: 'submit' | 'reset' | 'button';
    sufixImage?: string;
    prefixImage?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    className?: string;
    textColor?:string
    backgroundColor?:string
    howerTextColor?:string
}

const IcoBtn: React.FunctionComponent<IButtonProps> = ({
	text,
	disabled,
	loading,
	type,
	onClick,
	sufixImage = '',
	prefixImage = '',
	textColor = '',
	backgroundColor = '',
	howerTextColor = '',
	className,
	...other
},) => {
	const isLoading = Boolean(loading,)
	const isDisabled = isLoading || disabled

	return <button onClick={onClick} type={type} className={classBuilder([btn({
		sufixImage,
		prefixImage,
		textColor,
		backgroundColor,
		howerTextColor,
	},),className,],)}
	disabled={isDisabled}
	{...other}
	>
		{
			isLoading ?
				'loading' :
				text
		}
	</button>
}

export default IcoBtn
