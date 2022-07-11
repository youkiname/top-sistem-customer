import React from 'react'
import { Link } from 'react-router-dom'

import cls from './ShopListItem.module.scss'


const ShopListItem = (props) => {
	return (
		<div className={cls.wrapper}>
			<div className={cls.logo}>
				{props?.avatar_link ? (
					<img src={props?.avatar_link} alt='' />
				) : (
					<div className={cls.placeholder}>{props?.name[0].toUpperCase()}</div>
				)}
			</div>
			<div className={cls.text}>
				<div className={cls.name}>{props?.name}</div>
				<div className={cls.botRow}>
					<div className={cls.category}>{props?.category?.name}</div>
					<Link to='/'>Сообщения</Link>
				</div>
			</div>
			<div className={cls.btnGroup}>
				<div>{props?.cashback}%</div>
			</div>
		</div>
	)
}

export { ShopListItem }