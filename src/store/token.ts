import {
	create,
} from 'zustand'
import {
	persist,
} from 'zustand/middleware'

interface IToken {
  token: string | undefined;
  setToken: (newToken: string) => void;
  resetToken: () => void;
}

export const useToken = create<IToken>()(
	persist((set,) => {
		return {
			token:    undefined,
			setToken: (newToken: string,): void => {
				set(() => {
					return {
						token: newToken,
					}
				},)
			},
			resetToken: (): void => {
				set(() => {
					return {
						token: undefined,
					}
				},)
			},
		}
	},
	{
		name:    'TOKEN',
	},),)

