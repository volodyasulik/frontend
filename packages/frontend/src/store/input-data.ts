import {
	create,
} from 'zustand'
import type {
	ProfileFormValues,
} from '../shared/types/input-values.types'

interface ISelect {
    value: string;
    label: string
}

interface IInputValuesStore {
    login: string | undefined;
    initialLoginValue: string | undefined;
    password: string | undefined;
    userData: ProfileFormValues | undefined;
    dateInStore: Array<number> | undefined;
    counrtyInStore: ISelect | undefined;
    setCountry: (counrty: ISelect | undefined) => void;
    setLogin: (newLogin: string) => void;
    setPassword: (newPassword: string) => void;
    setUserData: (newUserData: ProfileFormValues | undefined) => void;
    setDateInStore: (newDate: Array<number> | undefined) => void
    setInitialValueLogin: (newLogin: string) => void;
}

const useInputValues = create<IInputValuesStore>((set,) => {
	return {
		login:             undefined,
		password:          undefined,
		userData:          undefined,
		dateInStore:       undefined,
		initialLoginValue: undefined,
		counrtyInStore:     undefined,
		setLogin:          (newLogin: string,): void => {
			set(() => {
				return {
					login: newLogin,
				}
			},)
		},
		setPassword: (newPassword: string,): void => {
			set(() => {
				return {
					password: newPassword,
				}
			},)
		},
		setUserData: (newUserData: ProfileFormValues | undefined,): void => {
			set(() => {
				return {
					userData: newUserData,
				}
			},)
		},
		setDateInStore: (newDate,): void => {
			set(() => {
				return {
					dateInStore: newDate,
				}
			},)
		},
		setCountry: (counrty,): void => {
			set(() => {
				return {
					counrtyInStore: counrty,
				}
			},)
		},
		setInitialValueLogin: (newLogin: string,): void => {
			set(() => {
				return {
					initialLoginValue: newLogin,
				}
			},)
		},

	}
}
	,)

export default useInputValues