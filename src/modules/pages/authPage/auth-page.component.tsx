/* eslint-disable prefer-destructuring */
import React from 'react'
import {
	authPage, BackgroundImg,
} from './pages/sign-page.styled'
import AuthImgBackgraund from '../../../assets/images/auth-img-background.png'
import SingPages from './pages/sign-page.component'
import {
	useLocation,
} from 'react-router-dom'
import {
	RouterKeys,
} from '../../../router/keys'
import CodeInputForm from './component/codeInputForm/code-input-form.component'

const AuthPages: React.FC = () => {
	let page
	const location = useLocation()
	const path = location.pathname.split('/',)
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (path && path.length > 2) {
		page = `${path[1]}/${path[2]}`
	} else {
		page = path[1]
	}
	if (!page) {
		page = 'singup'
	}

	let content
	if (page === RouterKeys.CODEINPUT) {
		content = <CodeInputForm />
	} else {
		content = <SingPages type={page} />
	}
	return (
		<div className={authPage()}>
			<img className={BackgroundImg} src={AuthImgBackgraund} alt='Auth Background' />
			{content}
		</div>
	)
}

export default AuthPages
