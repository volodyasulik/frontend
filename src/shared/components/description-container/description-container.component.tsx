import React from 'react'
import AllowIcon from '../../../assets/icons/allow.icon.svg'
import {
	Title, TitleContainer,DescriptionContainers,
} from './description-container.style'

interface IProps {
    title: string;
    desc: string;
}

const DescriptionContainer: React.FC<IProps> = ({
	title, desc,
},) => {
	return (
		<div style={{
			position: 'relative',
		}}>
			<div className={TitleContainer}>
				<img src={AllowIcon} alt='Allow Icon'/>
				<h4 className={Title}>{ title}</h4>
			</div>
			<div className={DescriptionContainers}>
				<p>{desc}</p>
			</div>
		</div>
	)
}

export default DescriptionContainer