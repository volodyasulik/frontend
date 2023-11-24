import {
	EnhancedWithAuthHttpService,
} from './http-auth.service'
import {
	EnhancedWithBalanceHttpService,
} from './http-balance.service'
import {
	EnhancedWithOpenPaydHttpService,
} from './http-open-payd.service'
import {
	EnhancedWithUserHttpService,
} from './http-user.service'

import {
	HttpService,
} from './http.service'

import {
	mainAxios,
} from './mainAxion'

export class HttpFactoryService {
	public createHttpService(): HttpService {
		return new HttpService(mainAxios,)
	}

	public createAuthHttpService(): EnhancedWithAuthHttpService {
		return new EnhancedWithAuthHttpService(this.createHttpService(),)
	}

	public readonly userHttpService: EnhancedWithUserHttpService = new EnhancedWithUserHttpService(this.createHttpService(),)

	public readonly balanceHttpService: EnhancedWithBalanceHttpService = new EnhancedWithBalanceHttpService(this.createHttpService(),)

	public readonly openPaydHttpService: EnhancedWithOpenPaydHttpService = new EnhancedWithOpenPaydHttpService(this.createHttpService(),)
}
export const services = new HttpFactoryService()
