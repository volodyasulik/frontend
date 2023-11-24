/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import {
	TitleContainer,
} from './menu-utils.styled'

const UserTitleContainer: React.FC<{ style?: string }> = ({
	style,
},) => {
	const photo = null
	const userName = 'Tom Johnson'
	const logoWithoutImg = (firstName: string, surName?: string,): string => {
		const mergedWord = firstName.charAt(0,).toUpperCase() +
            (surName ?
            	surName.charAt(0,).toUpperCase() :
            	'')

		return mergedWord
	}
	return (
		<div className={`${TitleContainer} ${style}`}>
			{
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				photo ?
					<img src={photo} alt='User Photo' /> :
					<span>{logoWithoutImg('T', 'S',)}</span>
			}

			<h3>{userName}</h3>
		</div>
	)
}

export default UserTitleContainer
