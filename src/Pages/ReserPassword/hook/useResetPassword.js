import React, { useState } from 'react'

import api from '../../../utils/api'


const useResetPassword = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [step, setStep] = useState(0)
	const [userEmail, setUserEmail] = useState('')
	const [acceptCode, setAcceptCode] = useState('')

	const mailInputHandler = async (data) => {
		setLoading(true)
		try {
			const res = await api.sendEmailToResetPassword(data?.email)
			if (res.status === 200) {
				setLoading(false)
				setStep(1)
				setUserEmail(data.email)
			}
		} catch (e) {
			setLoading(false)
			setError(true)
		}
	}

	const acceptCodeHandler = async (data) => {
		setLoading(true)
		try {
			const res = await api.checkResetPasswordCode(userEmail, data?.acceptCode)
			if (res.status === 200) {
				setLoading(false)
				setStep(2)
				setAcceptCode(data?.acceptCode)
			}
		} catch (e) {
			setLoading(false)
			setError(true)
		}
	}

	const newPasswordInputHandler = async (data) => {
		setLoading(true)
		try {
			const res = await api.setNewPassword(userEmail, acceptCode, data?.newPass)
			if (res.status === 200) {
				setLoading(false)
				setStep(3)
			}
		} catch (e) {
			setLoading(false)
			setError(true)
		}
	}

	const startAgain = () => {
		setLoading(false)
		setStep(0)
		setError(false)
		setUserEmail('')
		setAcceptCode('')
	}

	return {
		loading,
		error,
		step,
		userEmail,
		mailInputHandler,
		acceptCodeHandler,
		newPasswordInputHandler,
		startAgain
	}
}

export { useResetPassword }