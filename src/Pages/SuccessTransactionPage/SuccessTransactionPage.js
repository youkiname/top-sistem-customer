import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { LayoutContent } from '../../Layouts/LayoutContent'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'
import cls from '../QrScan/QrScan.module.scss'


const SuccessTransactionPage = () => {
	const bonus = useSelector((state) => state.bonus)
	const { bonusAmount } = useParams()
	if (!bonusAmount) {
		console.log(bonusAmount)
	}
	return (
		<div className={cls.qrScanPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<h2>Операция выполнена успешно</h2>
				<div className={cls.successWrap}>
					<div className={cls.successTop}>
						Вы <span>{bonus.mode === 'add' ? 'начислили' : 'списали'}</span>
					</div>
					<div className={cls.successAmount}>{bonusAmount}</div>
					<div className={cls.successBot}>баллов</div>
					<Link to='/' className={cls.successLinkHome}>
						Вернуться на главную
					</Link>
					<Link to='/scan' className={cls.successLinkNext}>
						Следующая операция
					</Link>
				</div>
			</LayoutContent>
		</div>
	)
}

export default SuccessTransactionPage