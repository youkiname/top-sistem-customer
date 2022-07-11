import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LayoutContent } from '../../Layouts/LayoutContent'
import { clearBonusState } from '../../Store/BonusState/bonusSlice'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import cls from './QrScan.module.scss'
import { useScan } from './hook/useScan'


const QrScan = () => {
	const {
		success,
		showInput,
		isSubmitSuccessful,
		tryAgain,
		statusButton,
		inputForm,
		qrRender,
		checkNumber
	} = useScan()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(clearBonusState())
	}, [])

	return (
		<div className={cls.qrScanPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<h2>Отсканируйте QR-код покупателя</h2>
				{!showInput && !isSubmitSuccessful ? qrRender : null}
				{success && checkNumber}
				{!showInput && statusButton}
				{showInput && inputForm}
				<button onClick={() => tryAgain()} className={cls.again}>
					Начать заново
				</button>
			</LayoutContent>
		</div>
	)
}

export default QrScan