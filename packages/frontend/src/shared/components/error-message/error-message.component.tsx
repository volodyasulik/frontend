import React from 'react'
import {
	ErrorMessageStyle,
} from './error.message.style'

interface IProps {
    msg: string
}

const ErrorMessageComponent: React.FC<IProps> = ({
	msg,
},) => {
	return (
		<div className={ErrorMessageStyle}>
			<p>{msg}</p>
		</div>
	)
}

export default ErrorMessageComponent