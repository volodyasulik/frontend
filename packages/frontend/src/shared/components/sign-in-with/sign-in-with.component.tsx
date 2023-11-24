import React from 'react'
import {
	Container,
} from './sign-in-with.style'
import {
	classBuilder,
} from '../../utils/class-builder.util'

interface IProps {
    icon: string
    styles?: string
    link: string
}

const SignInWith: React.FC<IProps> = ({
	icon,styles,link,
},) => {
	return (
		<a href={link} className={classBuilder([Container, styles,],)}>
			<p>Продовжити через</p>
			<img src={icon} alt='Social icon' />
		</a>
	)
}

export default SignInWith