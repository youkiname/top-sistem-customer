import React from 'react'

import { cardFormatter } from '../../../utils/cardFormatter'
import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const BonusOperationFormInfo = ({ clientInfo }) => {
	const { card } = clientInfo

	return (
		<>
			<div className={cls.formWrap}>
				<div className={cls.formItem}>
					<label>№ карты</label>
					<input
						type='text'
						disabled
						defaultValue={cardFormatter(card?.number)}
					/>
				</div>

				<div className={cls.formItem}>
					<label>Баланс</label>
					<input type='text' disabled defaultValue={card?.bonuses_amount} />
				</div>

				<div className={cls.formItem}>
					<label>Владелец</label>
					<input type='text' disabled defaultValue={clientInfo.name} />
				</div>
			</div>
		</>
	)
}

export { BonusOperationFormInfo }