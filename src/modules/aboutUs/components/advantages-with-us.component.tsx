import React from 'react'
import DropImg from '../../../assets/bg/drop.svg'
import AdvantagesWithUsCard from '../../../shared/components/card/advantages-with-us-card.component'
import DownloadIcon from '../../../assets/icons/download.icon.svg'
import UsersIcon from '../../../assets/icons/user-rounded.icon.svg'
import LikeIcon from '../../../assets/icons/like.icon.svg'
import BussinesIcon from '../../../assets/icons/pie-chart.icon.svg'
import {
	CardBgImg,
	CardsContainer,
	RightCardContainer,
	SectionOtherStyle,
	Title,
} from '../styles/advantages-with-us.style'
import DescriptionContainer from '../../../shared/components/description-container/description-container.component'

const AdvantagesWithUs: React.FC = () => {
	return <div className={SectionOtherStyle}>
		<div style={{
			position: 'relative',
		}}>
			<img className={CardBgImg} src={DropImg} alt='Drop image' />
			<div className={CardsContainer}>
				<div>
					<AdvantagesWithUsCard icon={DownloadIcon} members={'50'} desc='Скачуваннь'></AdvantagesWithUsCard>
					<AdvantagesWithUsCard icon={LikeIcon} members={'45'} desc='Задоволені сервісом'></AdvantagesWithUsCard>
				</div>
				<div className={RightCardContainer}>
					<AdvantagesWithUsCard icon={BussinesIcon} members={'500'} desc='Компаній та магазинів'></AdvantagesWithUsCard>
					<AdvantagesWithUsCard icon={UsersIcon} members={'25'} desc='Стали постійними покупцями'></AdvantagesWithUsCard>
				</div>
			</div>
		</div>
		<div>
			<h2 className={Title}>Переваги з нами</h2>
			<DescriptionContainer title='Величезний вибір' desc='Завантажуй додаток та обирай потрібний магазин
            з великого переліку, який ми постійно розшираємо.'/>
			<DescriptionContainer title='Швидкий кешбек' desc='Купуй улюблені товари або обирай послуги, а nomo перерахує твій кушбек на настпні покупки.'/>
			<DescriptionContainer title='Клієнтський сервіс' desc='Ми завжди на зв’язку! На будь-які питання ми маємо відповідь.'/>
		</div>
	</div>
}

export default AdvantagesWithUs