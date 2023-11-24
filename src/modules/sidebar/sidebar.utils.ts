import {
	mainNavItem, mainNavItemActive,
} from './sidebar.styled'

export const navlinkClass = (image:string,):(obj:{
		isActive:boolean,
	})=>string => {
	return ({
		isActive,
	}:{isActive:boolean},): string => {
		return `${mainNavItem(image,)} ${isActive ?
			mainNavItemActive :
			''}`
	}
}