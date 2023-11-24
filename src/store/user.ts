import {
	create,
} from 'zustand'
import type {
	IUser,
} from '../shared/types/user.types'

interface IUserStore {
  user: IUser | null;
    setUser: (newUser: IUser) => void;
    resetUser: ()=> void
}

export const useUser = create<IUserStore>((set,) => {
	return {
		user:    null,
		setUser: (newUser: IUser | null,): void => {
			set(() => {
				return {
					user: newUser,
				}
			},)
		},
		resetUser: (): void => {
			set(() => {
				return {
					user: null,
				}
			},)
		},
	}
},
)

