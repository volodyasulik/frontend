import React from 'react'
import DashboardSection from '../../shared/components/dashboard-section/dashboard-section.component'

const Trading: React.FC = () => {
	return (
		<DashboardSection>
			<article>
				<header>Trading</header>
				<ul>
					<li>Sell</li>
					<li>Buy</li>
				</ul>
				<form>
					<div>
						<input type='number'/>
						<div>
							<select>
								<option>BTC</option>
							</select>
							<span>Balance:</span><span> 0.5 BTC</span>
						</div>
					</div>
					<div>
						<input type='number'/>
						<div>
							<select>
								<option>EUR</option>
							</select>
							<span>Balance:</span><span>  € 0.0</span>
						</div>
					</div>
					<button type='submit'>Sell</button>
				</form>
			</article>
		</DashboardSection>
	)
}

export default Trading
