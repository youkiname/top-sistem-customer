import React from 'react'
import { useSelector } from 'react-redux'

import cls from '../HeaderMain.module.scss'


const CashbackDisplay = () => {
	const { cashbackPercent } = useSelector((state) => state.user)
	return (
		<div className={cls.cashback}>
			<div className={cls.percent}>{cashbackPercent}%</div>
			<div className={cls.text}>начисление с покупки</div>
		</div>
	)
}

export { CashbackDisplay }