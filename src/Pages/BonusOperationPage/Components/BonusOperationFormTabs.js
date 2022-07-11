import React from 'react'

import cn from 'classnames'

import cls from '../scss/BonusOperation.module.scss'


const BonusOperationFormTabs = ({ handler, mode }) => {
	return (
		<div className={cls.wrapTabs}>
			<div
				onClick={() => handler('add')}
				className={cn(cls.tabItem, mode === 'add' && cls.active)}
			>
				Начислить
			</div>
			<div
				onClick={() => handler('charge')}
				className={cn(cls.tabItem, mode === 'charge' && cls.active)}
			>
				Списать
			</div>
		</div>
	)
}

export { BonusOperationFormTabs }