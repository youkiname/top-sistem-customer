import React from 'react'
import { Link } from 'react-router-dom'

import style from '../scss/ResetPassword.module.scss'


const ChangePassComplete = () => {
	return (
		<div>
			Вы сменили пароль! Теперь Вы можете перейти на{' '}
			<Link
				className={style.resetPassLink}
				style={{ display: 'inline', textDecoration: 'underline' }}
				to='/auth'
			>
				страницу входа
			</Link>
		</div>
	)
}

export { ChangePassComplete }