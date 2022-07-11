import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../../Components/BonusCard/Logo'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import cls from '../CatalogPage/CatalogPage.module.scss'

import { AcceptCodeForm } from './components/AcceptCodeForm'
import { ChangePassComplete } from './components/ChangePassComplete'
import { NewPassword } from './components/NewPassword'
import { ResetPasswordForm } from './components/ResetPasswordForm'
import { useResetPassword } from './hook/useResetPassword'
import style from './scss/ResetPassword.module.scss'


const ResetPassword = () => {
	const {
		loading,
		error,
		step,
		userEmail,
		mailInputHandler,
		acceptCodeHandler,
		newPasswordInputHandler,
		startAgain
	} = useResetPassword()

	return (
		<div className={cls.catalogPage}>
			{loading && <Loader />}
			<Logo />
			<LayoutContent>
				<h2>Восстановить пароль</h2>
				{step === 0 && <ResetPasswordForm handler={mailInputHandler} />}
				{step === 1 && (
					<AcceptCodeForm handler={acceptCodeHandler} email={userEmail} />
				)}
				{step === 2 && <NewPassword handler={newPasswordInputHandler} />}
				{step === 3 && <ChangePassComplete />}
				{step === 0 && (
					<Link to='/auth' className={style.resetPassLink}>
						Вернуться ко входу
					</Link>
				)}
				{step !== 0 && (
					<button className={style.resetPassBtn} onClick={startAgain}>
						Начать заново
					</button>
				)}
				{error && <div>Что-то пошло не так... Попробуйте еще раз</div>}
			</LayoutContent>
		</div>
	)
}

export default ResetPassword