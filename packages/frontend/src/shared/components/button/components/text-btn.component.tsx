import * as React from 'react'
import classNames from 'classnames'

import type {
	BtnBase, ButtonType, TextBtnProps,
} from '../button.types'

import {
	btn,
} from '../button.styles'

const TextBtn: React.FunctionComponent<BtnBase & TextBtnProps<ButtonType.TEXT>> = ({
	isDisabled,
	...buttonAttributes
},) => {
	return <button
		disabled={isDisabled}
		{...buttonAttributes}
		className={classNames(btn, buttonAttributes.className,)}
	>
	</button>
}

export default TextBtn
