import React from 'react'
import {
	cardBody, cardTitle,
} from './card.styled'

interface IProps {
    children?: React.JSX.Element | Array<React.JSX.Element> | string
    title?:string
}

const Card: React.FC<IProps> = ({
	children,
	title,
},) => {
	return <div className={cardBody}>
		{title && <h1 className={cardTitle}>{title}</h1>}
		{children}
	</div>
}
export default Card
