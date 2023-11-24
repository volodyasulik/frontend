/* eslint-disable max-len */
import React from 'react'
import IconContainer from '../../../shared/components/icon-container/icon-container.component'
import StarIcon from '../../../assets/icons/star.icon.svg'
import PhoneImg from '../../../assets/images/phoneFrame3..svg'
import {
	SectionOtherStyle,WhoWeAreContainer,
} from '../styles/who-with-us.style'

const WhoWithUs: React.FC = () => {
	return (
		<div className={SectionOtherStyle}>
			<img src={ PhoneImg} alt='Phone image'/>
			<div className={WhoWeAreContainer}>
				<IconContainer icon={StarIcon} />
				<h2>Хто з нами?</h2>
				<p>Знайдіть свою улюблену компанію чи магазин nomo-кешбек! Ми співпрацюємо з багатьма відомими магазинами та брендами з різних гагузей: від одягу та взуття, косметики чи ресторанів до електоріки та подорожей. Також, ви зможете подивитися точну локацію та контакати цієї компанії у нас.</p>
			</div>
		</div>
	)
}

export default WhoWithUs