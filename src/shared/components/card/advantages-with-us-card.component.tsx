import React from 'react'
import {
	Card,
} from './advantages-with-us-card.style'

interface IProps {
    members: string;
    desc: string;
    icon: string;
}

const AdvantagesWithUsCard: React.FC<IProps> = ({
	members, desc, icon,
},) => {
	return (<div className={Card}>
		<img src={icon} alt={icon} />
		<h3>{members} K+</h3>
		<p>{desc}</p>
	</div>)
}

export default AdvantagesWithUsCard