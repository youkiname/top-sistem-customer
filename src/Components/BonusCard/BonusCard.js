import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { levelCardColor } from '../../data/data'
import img from '../../img/trc.png'
import { cardFormatter } from '../../utils/cardFormatter'
import { lastDayOfMonth } from '../../utils/lastDayOfMonth'

import cls from './BonusCard.module.scss'


const BonusCard = () => {
	const { card, shoppingCenters } = useSelector((state) => state)
	const { selectedCenter } = shoppingCenters
	const { status = 'bronze' } = card

	return (
		<div className={cls.wrapper}>
			<div className={cls.topRow}>
				<Link to='/catalog' className={cls.tcSelect}>
					<div className={cls.tcSelectImg}>
						<img src={selectedCenter?.avatar_link} alt='' />
					</div>
					<div className={cls.tcText}>Выбрать ТЦ</div>
				</Link>
				<div className={cls.topRowRight}>
					<div className={cls.cardNumber}>{cardFormatter(card.number)}</div>
					<div className={cls.nextCard}>
						{card.nextStatus !== null ? (
							<>
								до {card.nextStatus} карты <span>{card.toNextStatus}</span> 🔥
								<div>успеть до {lastDayOfMonth()}</div>
							</>
						) : (
							<span>У вас максимальный уровень😎💥</span>
						)}
					</div>
				</div>
			</div>
			<div className={cls.bottomRow}>
				<div
					className={cls.cardLevel}
					style={{ color: levelCardColor[status.toLowerCase()] }}
				>
					{status.toUpperCase()}
				</div>
				<div className={cls.countWrap}>
					<div className={cls.uptext}>доступно баллов</div>
					<div className={cls.countBonus}>{card.bonusAmount}</div>
				</div>
			</div>
		</div>
	)
}

export { BonusCard }