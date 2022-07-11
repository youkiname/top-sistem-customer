import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { CatalogListItem } from '../CatalogListItem/CatalogListItem'
import { SelectCity } from '../SelectCity/SelectCity'

import cls from './CatalogList.module.scss'


const CatalogList = ({ catalog, cities }) => {
	const [shoppingCenters, setShoppingCenters] = useState(catalog)
	const { selectedCity } = useSelector((state) => state.shoppingCenters)

	useEffect(() => {
		setShoppingCenters(catalog)
	}, [catalog])

	const onFilterHandler = (filter) => {
		let data = [...catalog]
		if (filter !== 'Все города') {
			data = data.filter((i) => i.city.name === filter)
		}
		setShoppingCenters(data)
	}
	return (
		<div className={cls.wrapper}>
			<SelectCity cities={cities} onFilter={onFilterHandler} />
			<div className={cls.list}>
				{shoppingCenters.map((i) => {
					return (
						<div className={cls.listItem} key={i.name}>
							<CatalogListItem {...i} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export { CatalogList }