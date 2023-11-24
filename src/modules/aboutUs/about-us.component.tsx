import React from 'react'
import LovelyCashBack from './components/lovely-section-header.component'
import AdvantagesWithUs from './components/advantages-with-us.component'
import WhoWeAre from './components/who-we-are.component'
import WhoWithUs from './components/who-with-us.component'
import ReviewsComponent from './components/reviews.component'
import AboutUsFooter from './components/footer.component'

const AboutUs:React.FC = () => {
	return <>
		<LovelyCashBack />
		<AdvantagesWithUs />
		<WhoWeAre />
		<WhoWithUs />
		<ReviewsComponent />
		<AboutUsFooter />
	</>
}

export default AboutUs