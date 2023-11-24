import React from 'react'
import {
	section,
} from './section.styled'

interface IProps {
    children: React.JSX.Element | Array<React.JSX.Element> | string,
    otherStyle?: string
}

const Section: React.FC<IProps> = ({
	children, otherStyle,
},) => {
	return (
		<section className={`${section} ${otherStyle}`}>
			{children}
		</section>
	)
}

export default Section
