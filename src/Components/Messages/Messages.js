import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import api from '../../utils/api'
import { Loader } from '../UI/Loader'

import { MessagesList } from './components/MessagesList/MessagesList'
import cls from './scss/Messages.module.scss'


const Messages = () => {
	const user = useSelector((state) => state.user)
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(true)
	const [err, setErr] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			api
				.getPollsList(user.id)
				.then((res) => {
					setList(res.data)
				})
				.catch(() => setErr(true))
				.finally(() => setLoading(false))
		}, 1000)
	}, [])

	return (
		<div className={cls.msgWrapper}>
			<div className={cls.header}>
				<div className={cls.title}>Опросы</div>
			</div>
			{loading && <Loader onlyLoader={true} transparent={false} />}
			{!err ? (
				<MessagesList list={list} />
			) : (
				'Что-то пошло не так... Попробуйте обновить страницу'
			)}
		</div>
	)
}

export { Messages }