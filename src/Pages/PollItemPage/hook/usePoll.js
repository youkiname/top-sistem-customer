import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../utils/api'


const usePoll = (idPoll) => {
	const user = useSelector((state) => state.user)
	const [loading, setLoading] = useState(true)
	const [err, setErr] = useState(false)
	const [pollData, setPollData] = useState()
	const [checkState, setCheckState] = useState('')
	const [alreadyCheck, setAlreadyCheck] = useState(false)

	useEffect(() => {
		if (!!user.id) {
			api
				.getPollByUser(idPoll, user.id)
				.then((res) => {
					setPollData(res.data)
					const initCheck = res.data?.choices.filter(
						(i) => i?.selected === true
					)
					setCheckState(initCheck[0]?.id.toString() || '')
					return initCheck[0]?.id.toString()
				})
				.then((init) => {
					if (!!init) setAlreadyCheck(true)
				})
				.catch(() => setErr(true))
				.finally(() => setLoading(false))
		}
	}, [idPoll, user])

	const checkHandler = (id) => {
		setCheckState(id)
	}

	const submitHandler = async () => {
		try {
			setLoading(true)
			const res = await api.setPollChoice(user.id, pollData?.id, checkState)
			if (res.status === 200) {
				setAlreadyCheck(true)
			}
		} catch (e) {
			setErr(true)
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		err,
		pollData,
		checkState,
		checkHandler,
		alreadyCheck,
		submitHandler
	}
}

export { usePoll }