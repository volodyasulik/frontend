import * as React from 'react'
import classNames from 'classnames'
import {
	Spinner, SpinnerSize,
} from '@blueprintjs/core'

import type {
	BtnBase, ButtonType, IconButtonProps,
} from '../button.types'

import {
	btn, iconBtn,
} from '../button.styles'

const IconBtn: React.FunctionComponent<BtnBase & IconButtonProps<ButtonType.ICON>> = ({
	icon,
	isDisabled,
	isLoading,
	...buttonAttributes
},) => {
	return <button
		disabled={isDisabled}
		{...buttonAttributes}
		className={classNames(btn, iconBtn, buttonAttributes.className,)}
	>
		{
			isLoading ?
				<Spinner size={SpinnerSize.SMALL} /> :
				icon
		}
	</button>
}

export default IconBtn
