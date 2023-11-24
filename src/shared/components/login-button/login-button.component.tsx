import React from 'react'
import {
	Button,
} from './login-button.style'
import {
	classBuilder,
} from '../../utils/class-builder.util'

interface IProps {
    children: string;
    styles?: string
}

const LoginButton: React.FC<IProps> = ({
	children, styles,
},) => {
	return (
		<button type='submit' className={classBuilder([Button,styles,],)}>
			{children}
		</button>
	)
}

export default LoginButton