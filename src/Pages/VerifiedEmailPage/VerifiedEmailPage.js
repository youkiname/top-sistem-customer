import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import { Logo } from '../../Components/BonusCard/Logo'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import { verifiedEmail } from '../../Store/AuthState/authServices'
import cls from '../AuthPage/AuthPage.module.scss'


const VerifiedEmailPage = () => {
	const [code, setCode] = useState('')
	const { emailParam } = useParams()
	const { email } = useSelector((state) => state.user)
	const { isVerified, loading, error } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const changeCodeHandler = (val) => {
		setCode(val.target.value)
	}

	const submitHandler = () => {
		dispatch(verifiedEmail({ email: email || emailParam, code }))
	}

	if (isVerified) {
		return <Navigate to='/' replace />
	}

	return (
		<div className={cls.authPage}>
			<Logo />
			<LayoutContent>
				{loading && <Loader />}
				<h2>Пожалуйста, подтвердите e-mail</h2>
				<p className={cls.verifiedP}>
					Введите код, который был отправлен на Вашу почту
				</p>
				<input
					className={cls.verifiedInput}
					type='text'
					value={code}
					placeholder='*****'
					min={5}
					max={5}
					onChange={changeCodeHandler}
				/>
				<button onClick={submitHandler} className={cls.verifiedButton}>
					Подтвердить
				</button>
				{error && (
					<p style={{ color: 'red', textAlign: 'center' }}>
						Что-то пошло не так... Попробуйте ещё раз
					</p>
				)}
			</LayoutContent>
		</div>
	)
}

export default VerifiedEmailPage