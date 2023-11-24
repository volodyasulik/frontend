import React from 'react'
import IconContainer from '../../../shared/components/icon-container/icon-container.component'
import PointIcon from '../../../assets/icons/point.icon.svg'
import LetterIcon from '../../../assets/icons/letter.icon.svg'
import CallIcon from '../../../assets/icons/call-chat-counded.icon.svg'
import MapImage from '../../../assets/images/map.image.svg'
import AppleIcon from '../../../assets/icons/apple.icon.svg'
import InstIcon from '../../../assets/icons/instagram.icon.svg'
import ArrowIcon from '../../../assets/icons/arrow.icon.svg'
import {
	ContactInfoContainer,
	FooterContainer,IconContainers, SayHelloContainer,SocialMedias, SocialMediasContainer,NomoCashback,
} from '../styles/footer.style'

const AboutUsFooter: React.FC = () => {
	return (
		<footer className={FooterContainer}>
			<div className={ContactInfoContainer}>
				<div >
					<h2>Скажи привіт</h2>
					<div className={SayHelloContainer}>
						<IconContainer icon={PointIcon} styles={IconContainers} />
						<p>м. Івано-Франківськ, вул. Івасюка 84</p>
					</div>
					<div className={SayHelloContainer}>
						<IconContainer icon={ LetterIcon} styles={IconContainers}/>
						<p>nomo-cashback@gmail.com</p>
					</div>
					<div className={SayHelloContainer}>
						<IconContainer icon={ CallIcon } styles={IconContainers}/>
						<p>+380684392129</p>
					</div>
				</div>
				<div>
					<h2>Наша локація</h2>
					<img src={MapImage} alt='Map'/>
				</div>
			</div>
			<span></span>
			<div style={{
				display:        'flex',
				alignItems:     'center',
				justifyContent: 'space-between',
				marginBottom:   '6rem',
			}}>
				<p className={NomoCashback}>© Nomo cashback 2023</p>
				<div className={SocialMediasContainer}>
					<IconContainer icon={InstIcon} styles={SocialMedias} />
					<IconContainer icon={AppleIcon} styles={SocialMedias} />
					<IconContainer icon={ ArrowIcon } styles={SocialMedias}/>
				</div>
			</div>
		</footer>
	)
}

export default AboutUsFooter