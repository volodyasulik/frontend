export type ProfileFormValues = {
	birthday?: string;
	name?: string;
	surName?: string;
	country?: string;
	city?: string;
}

export type SignPageFormValues = {
    login: string;
    password: string;
    confirmPassword: string
}

export type SingUpFormValues = {
    login?: string;
    userData?: {
        name: string;
        surName: string;
        password: string;
        country: string;
        city: string;
        birthday: string;
    }
}

export type SugnUpUserData = {
     name: string;
        surName: string;
        password: string;
        country: string;
        city: string;
        birthday: string;
}
