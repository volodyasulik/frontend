import React from 'react'
import PhoneImg from '../../../assets/images/phoneFrame1.svg'
import {
	LovelyCashbackSection,Content, ContentText,ContentImg,
} from '../styles/lovely-section-header.styled'

const LovelyCashBack: React.FC = () => {
	return (<>
		<div className={LovelyCashbackSection}>
			<div className={Content}>
				<div className={ContentText}>
					<h1><span>Л</span>юбий кешбек на твій вибір, тільки тут тільки з <span>NOMO</span></h1>
					<p>Ми пропонуємо унікальний кешбек програму для своїх клієнтів. Ми працюємо з багатьма партнерами, щоб дозволити
                    нашим користувачам отримувати грошовий кешбек за покупки в різних магазинах та онлайн-платформах.</p>
				</div>
				<div className={ContentImg}>
					<img src={PhoneImg} alt='Phone Image' />
				</div>
			</div>
		</div>
	</>)
}

export default LovelyCashBack