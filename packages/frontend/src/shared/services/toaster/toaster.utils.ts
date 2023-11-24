import classNames from 'classnames'
import type {
	Toaster,
} from '@blueprintjs/core'
import {
	OverlayToaster, Position,
} from '@blueprintjs/core'

export const createToaster = (): Toaster => {
	return OverlayToaster.create({
		className: classNames('recipe-toaster',),
		position:  Position.TOP_RIGHT,
	},)
}
