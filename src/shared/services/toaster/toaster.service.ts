import {
	match,
} from 'ts-pattern'
import {
	Intent,
} from '@blueprintjs/core'

import {
	createToaster,
} from './toaster.utils'
import type {
	ToastType,
} from './toaster.types'

class ToasterService {
	private readonly toaster = createToaster()

	private showToast(message: string, toastType: ToastType,): void {
		const intent = match(toastType,)
			.with('success', () => {
				return Intent.SUCCESS
			},)
			.with('error', () => {
				return Intent.DANGER
			},)
			.run()

		this.toaster.show({
			message,
			intent,
		},)
	}

	public showSuccessToast(message: string,): void {
		this.showToast(message, 'success',)
	}

	public showErrorToast(message: string,): void {
		this.showToast(message, 'error',)
	}
}

export const toasterService = new ToasterService()
