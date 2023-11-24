import React from 'react'
import sedavaLogo from '../../assets/icons/dashboard/sedava.svg'
import {
	box,logo,
} from './coming-soon.styled'

const ComingSoon: React.FC = () => {
	return (<div className={box}>
		<img className={logo} src={sedavaLogo} />
	</div>)
}

export default ComingSoon
