import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'

import { register, signIn } from '../../../Store/AuthState/authServices'


export const useAuthPage = () => {
	const [authFormat, setAuthFormat] = useState(true)
	const dispatch = useDispatch()

	const signInHandler = (data) => {
		const login = data.login
		const password = data.password

		if (!!authFormat) {
			dispatch(signIn({ login, password }))
		}
	}

	const registerHandler = (data) => {
		const obj = {
			...data,
			birth: dayjs(data.birth).format('YYYY-MM-DD')
		}

		dispatch(register(obj))
	}

	const underBlock = () => {
		if (authFormat) {
			return (
				<>
					<Link to='/reset-pass'>Забыли пароль</Link> или{' '}
					<button onClick={() => setAuthFormat(false)}>
						зарегистрироваться
					</button>
				</>
			)
		} else {
			return (
				<>
					Уже есть аккаунт?{' '}
					<button onClick={() => setAuthFormat(true)}>Войти</button>
				</>
			)
		}
	}

	return {
		authFormat,
		setAuthFormat,
		signInHandler,
		underBlock,
		registerHandler
	}
}