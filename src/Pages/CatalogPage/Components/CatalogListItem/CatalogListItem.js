import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ChoiceButton } from '../../../../Components/UI/ChoiseButton'
import { selectShoppingCenter } from '../../../../Store/ShoppingCenters/shoppingCentersServices'
import { gradients } from '../../../../data/data'
import logoPlaceholder from '../../../../img/trc.png'
import { randomInteger } from '../../../../utils/randomInteger'

import cls from './CatalogListItem.module.scss'


const CatalogListItem = (props) => {
	const { avatar_link: logo, name, city, id } = props
	const gradient = () => {
		return gradients[randomInteger(0, gradients.length - 1)].toString()
	}
	const dispatch = useDispatch()
	const { selectedCenter } = useSelector((state) => state.shoppingCenters)
	const user = useSelector((state) => state.user)
	const [color, setColor] = useState(gradient())

	const clickHandler = () => {
		dispatch(selectShoppingCenter({ userId: user.id, centerId: id }))
	}

	return (
		<div className={cls.wrapper} style={{ background: color }}>
			<div className={cls.topRow}>
				<div className={cls.logo}>
					<img src={logo || logoPlaceholder} alt='logo' />
				</div>
				<div className={cls.titles}>
					<div className={cls.name}>{name || 'Торговый центр'}</div>
					<div className={cls.address}>{city.name || ' '}</div>
				</div>
			</div>
			<ChoiceButton
				state={selectedCenter?.id === id}
				clickHandler={clickHandler}
			/>
			<Link to={`/catalog/${id}`} className={cls.more}>
				Подробнее
			</Link>
		</div>
	)
}

export { CatalogListItem }