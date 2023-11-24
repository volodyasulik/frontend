import React from 'react'
import LockIcon from '../../../../../../../assets/icons/lockIcon.svg'
import {
	ChangePasswordContainer, IconAndDivContainer,
} from './change-password-button.styled'

const PasswordChangeButton: React.FC = () => {
	return <div className={ChangePasswordContainer}>
		<div className={IconAndDivContainer}>
			<img src={LockIcon} alt='Lock Icon' />
			<p>
                Password
			</p>
		</div>
		<button>Change</button>
	</div>
}

export default PasswordChangeButton