import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineScan } from 'react-icons/ai'
import { GrLinkNext } from 'react-icons/gr'
import { MdDoneAll } from 'react-icons/md'
import InputMask from 'react-input-mask'
import { QrReader } from 'react-qr-reader'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getClientInfoAfterScan } from '../../../Store/BonusState/bonusServices'
import { cardFormatter } from '../../../utils/cardFormatter'
import { superTrim } from '../../../utils/superTrim'
import cls from '../QrScan.module.scss'


const useScan = () => {
	const [data, setData] = useState('')
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [showInput, setShowInput] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {
		register,
		formState: { errors, isSubmitSuccessful },
		handleSubmit,
		reset
	} = useForm({ mode: 'all' })

	const resultHandler = async (res, err) => {
		if (!!res) {
			if (res.text.length === 16) {
				setError(false)
				setSuccess(true)
				setShowInput(false)
				setData(res.text)
			} else {
				setError(true)
			}
		} else if (!!err) {
			setError(true)
		}
	}

	const handleForm = async (d) => {
		setLoading(true)
		setError(false)
		setSuccess(true)
		setShowInput(false)
		setData(superTrim(d.card))
	}

	const showInputHandler = (val) => {
		setShowInput(val)
		setSuccess(false)
	}

	const tryAgain = () => {
		setLoading(false)
		setError(false)
		setSuccess(false)
		setShowInput(false)
		setData('')
		reset()
	}

	const onSuccess = async (number) => {
		setLoading(true)
		try {
			await dispatch(getClientInfoAfterScan({ number }))
			await navigate(`/bonus/${number}`)
		} catch (e) {
			setError(!!e)
		} finally {
			setLoading(false)
		}
	}

	const statusButton = (
		<>
			<button
				onClick={() => onSuccess(data)}
				disabled={error && !success}
				className={error && !success ? cls.error : cls.success}
			>
				{error && !success ? (
					<>
						<AiOutlineScan /> Сканируем...
					</>
				) : (
					<>
						<MdDoneAll />
						Продожить
					</>
				)}
			</button>
			<div className={cls.showInput}>
				или <span onClick={() => showInputHandler(true)}>введите код</span>
			</div>
		</>
	)

	const inputForm = (
		<>
			<form className={cls.formWrap} onSubmit={handleSubmit(handleForm)}>
				<InputMask
					mask='9999 9999 9999 9999'
					type='tel'
					className={cls.formInput}
					{...register('card', {
						minLength: {
							value: 16,
							message: 'Минимум 16 символов'
						}
					})}
				>
					{(props) => <input {...props} />}
				</InputMask>
				<button className={cls.formBtn}>
					<GrLinkNext />
				</button>
			</form>
		</>
	)

	const qrRender = (
		<>
			<QrReader
				constraints={{ facingMode: 'environment' }}
				scanDelay={1000}
				onResult={(result, error) => resultHandler(result, error)}
				style={{ width: '100%', height: '100%' }}
			/>
		</>
	)

	const checkNumber = (
		<div className={cls.cardNumber}>
			<p>Пожалуйста, проверьте номер карты</p>
			<div>{cardFormatter(data)}</div>
			<p>если всё верно, то нажмите "Продолжить"</p>
		</div>
	)

	return {
		data,
		error,
		success,
		showInput,
		navigate,
		register,
		errors,
		showInputHandler,
		resultHandler,
		statusButton,
		inputForm,
		qrRender,
		checkNumber,
		isSubmitSuccessful,
		tryAgain
	}
}

export { useScan }