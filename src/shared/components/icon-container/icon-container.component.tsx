import React from 'react'
import {
	IconContainers,
} from './icon-container.style'

interface IProps {
    icon: string;
    styles?: string;
}

const IconContainer: React.FC<IProps> = ({
	icon,styles,
},) => {
	return (
		<div className={`${IconContainers} ${styles}`}>
			<img src={icon} alt='Cat icon' />
		</div>
	)
}
export default IconContainer