import React from 'react'
import OctopusImg from '../../../../../../assets/images/dolphin-plan-img.svg'
import ArrowIcon from '../../../../../../assets/icons/linkArrow.svg'
import {
	Link,
} from 'react-router-dom'
import {
	PlanContainer, PlanLinkTextContainer, PlanTitleContainer, PlanImg,
} from './menu-utils.styled'

const PlanContainerComponent: React.FC = () => {
	return <div className={PlanContainer}>
		<div className={PlanTitleContainer}>
			<p>Plan:</p>
			<Link to={''}>
				<div className={PlanLinkTextContainer}>
					<p>view all</p>
					<img src={ArrowIcon} alt='Arrow Icon' />
				</div>
			</Link>
		</div>
		<img className={PlanImg} src={OctopusImg} alt='Plan Img' />
	</div>
}

export default PlanContainerComponent