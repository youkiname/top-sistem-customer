import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Logo } from '../../Components/BonusCard/Logo'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import { clearErrors } from '../../Store/AuthState/authSlice'

import cls from './AuthPage.module.scss'
import { AuthForm } from './Components/AuthForm'
import { RegisterForm } from './Components/RegisterForm'
import { useAuthPage } from './hook/useAuthPage'


const AuthPage = () => {
	const { underBlock, authFormat } = useAuthPage()
	const { auth, loading, error, isVerified } = useSelector(
		(state) => state.auth
	)
	const { email } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(clearErrors())
	}, [authFormat])

	if (auth && isVerified) {
		return <Navigate to='/' replace />
	} else if (auth && !isVerified) {
		return <Navigate to={`/verified/${email}`} replace />
	}

	return (
		<div className={cls.authPage}>
			{loading && <Loader />}
			<Logo />
			<LayoutContent>
				<h2 className={cls.title}>
					{authFormat ? 'Авторизация' : 'Регистрация'}
				</h2>
				{authFormat ? <AuthForm /> : <RegisterForm />}
				{error && (
					<div className={cls.errorMsg}>
						{authFormat
							? 'Неправильный логин или пароль'
							: 'Что-то пошло не так... Попробуйте еще раз'}
					</div>
				)}
				<div className={cls.underBlock}>{underBlock()}</div>
			</LayoutContent>
		</div>
	)
}

export { AuthPage }