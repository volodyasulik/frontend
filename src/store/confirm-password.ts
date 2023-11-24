import {
	create,
} from 'zustand'

interface ICounterState {
	password: string | undefined;
    setPassword: (newPassword: string) => void;
    confirmPassword: string | undefined;
    setConfrimPassword: (newPassword: string) => void;
}

export const usePassword = create<ICounterState>((set,) => {
	return {
		password:        undefined,
		confirmPassword: undefined,
		setPassword:     (newPassword: string,): void => {
			set(() => {
				return {
					password: newPassword,
				}
			},)
		},
		setConfrimPassword: (newPassword: string,): void => {
			set(() => {
				return {
					confirmPassword: newPassword,
				}
			},)
		},
	}
},)