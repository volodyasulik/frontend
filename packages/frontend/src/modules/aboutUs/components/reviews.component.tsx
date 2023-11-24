import React from 'react'
import BellIcon from '../../../assets/icons/bell.icon.svg'
import IconContainer from '../../../shared/components/icon-container/icon-container.component'
import ReviewsCard from '../../../shared/components/review-card/review-card.component'
import OlenaIcon from '../../../assets/icons/Olena.icon.svg'
import GregoryIcon from '../../../assets/icons/Gregory.icon.svg'
import OlyIcon from '../../../assets/icons/Oly.icon.svg'
import {
	Title,ReviewsContainer, SectionOherStyle,
} from '../styles/reviews.style'

const ReviewsComponent: React.FC = () => {
	return (<div className={SectionOherStyle}>
		<IconContainer icon={BellIcon} />
		<h2 className={Title}>Відгуки про нас</h2>
		<div className={ReviewsContainer}>
			<ReviewsCard review='Nomo - це моя любов! Купила дешевше одяг та й ще й накопичила собі на подарунок' whoIcon={OlenaIcon} whoName='Олена' />
			<div style={{
				marginBottom: '2.5rem',
			}}>
				<ReviewsCard review='Завжди купую через цей додаток. Так зручно та завжди приємно отримувати кешбек.' whoIcon={GregoryIcon} whoName='Григорій' />
			</div>
			<ReviewsCard review='Люблю економію. Тому обираю зручне рішення - купувати з кешбек програмою.' whoIcon={OlyIcon} whoName='Ольга'/>
		</div>
	</div>)
}

export default ReviewsComponent