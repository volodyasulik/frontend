import React from 'react'
import HyphenIcon from '../../../assets/icons/hyphen.icon.svg'
import {
	ReviewContainer, WhoContainer,
} from './review-card.style'

interface IProps {
    whoIcon: string;
    whoName: string;
    review: string;
}

const ReviewsCard: React.FC<IProps> = ({
	whoIcon,whoName,review,
},) => {
	return (
		<div className={ReviewContainer}>
			<img src={HyphenIcon} alt='Hyphen icon'/>
			<p>{review}</p>
			<span></span>
			<div className={WhoContainer}>
				<img src={whoIcon} />
				<h4>{whoName}</h4>
			</div>
		</div>
	)
}

export default ReviewsCard