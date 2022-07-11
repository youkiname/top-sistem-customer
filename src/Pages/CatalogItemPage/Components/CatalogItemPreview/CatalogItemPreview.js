import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ChoiceButton } from '../../../../Components/UI/ChoiseButton'
import { setSelectedCenter } from '../../../../Store/ShoppingCenters/shoppingCentersSlice'

import cls from './CatalogItemPreview.module.scss'


const CatalogItemPreview = (props) => {
	const { selectedCenter } = useSelector((state) => state.shoppingCenters)
	const dispatch = useDispatch()
	const clickHandler = () => {
		dispatch(setSelectedCenter(props.id))
	}

	return (
		<div className={cls.wrapper}>
			<div className={cls.topRow}>
				<div className={cls.logo}>
					<img src={props.avatar_link} alt='' />
				</div>
				<div className={cls.name}>{props.name}</div>
				<div className={cls.btn}>
					<ChoiceButton
						state={selectedCenter?.id === props?.id}
						clickHandler={clickHandler}
					/>
				</div>
			</div>
			<div className={cls.descr}>{props.description || ''}</div>
		</div>
	)
}

export { CatalogItemPreview }