/* eslint-disable max-len */
import React from 'react'
import PhoneImg from '../../../assets/images/phoneFrame2.svg'
import Caticon from '../../../assets/icons/cat.icon.svg'
import AppStore from '../../../assets/images/app-store.image.svg'
import GooglePaly from '../../../assets/images/google-palay.image.svg'
import {
	SectionOtherStyle, StoresContainer, WhoWeAreContainer,
} from '../styles/who-we-are.style'
import IconContainer from '../../../shared/components/icon-container/icon-container.component'

const WhoWeAre: React.FC = () => {
	return (<div className={SectionOtherStyle}>
		<div className={WhoWeAreContainer}>
			<IconContainer icon={Caticon} />
			<h2>Хто ми?</h2>
			<p><span>Nomo</span> - це те, що зробить твоє життя кращим! Ми запустили класну програму кешбеку, де ти можеш отримати гроші за те, що просто робиш свої звичайні покупки. І все це безкоштовно! Просто здійснюй свої покупки через додаток або карточку nomo- кешбек. Отримай кешбек, який зможеш витратити на наступні покупки.</p>
			<div className={StoresContainer}>
				<a href='#'>
					<img src={AppStore} alt='App store image' />
				</a>
				<a href='#'>
					<img src={GooglePaly} alt='Google play image' />
				</a>
			</div>
		</div>
		<img src={PhoneImg} alt='Phone image'/>
	</div>)
}

export default WhoWeAre