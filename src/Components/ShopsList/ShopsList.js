import React from 'react'

import { ShopListItem } from './Components/ShopsListItem/ShopListItem'
import cls from './ShopsList.module.scss'


const ShopsList = (props) => {
	const { shops } = props
	return (
		<div className={cls.wrapper}>
			<h2>Магазины</h2>
			{shops.map((item) => (
				<ShopListItem {...item} key={'shop' + item.id} />
			))}
		</div>
	)
}

export { ShopsList }