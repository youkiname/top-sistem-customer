import React from 'react'

import cn from 'classnames'

import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const BonusOperationFormDeal = ({
	mode,
	sum,
	sumInputHandler,
	cash,
	cashInputHandler,
	error,
	inputError
}) => {
	return (
		<>
			<form className={cls.formWrap}>
				<div className={cn(cls.formItem, inputError && cls.errorInput)}>
					<label>Сумма покупки</label>
					<input
						value={sum}
						disabled={error}
						onChange={(e) => sumInputHandler(e.target.value)}
						type='number'
					/>
				</div>

				<div
					className={cn(
						cls.formItem,
						mode === 'add' ? cls.addBonuses : cls.chargeBonuses,
						inputError && cls.errorInput
					)}
				>
					<label>{mode === 'add' ? 'Будет начислено' : 'Списать'}</label>
					<input
						value={cash}
						disabled={error}
						onChange={(e) => cashInputHandler(e.target.value)}
						type='number'
					/>
				</div>
			</form>
		</>
	)
}

export { BonusOperationFormDeal }