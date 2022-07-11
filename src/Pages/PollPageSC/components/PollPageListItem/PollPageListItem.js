import React from 'react'
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'

import cls from './PollPageListItem.module.scss'


const PollPageListItem = (props) => {
	console.log(props)
	const getLink = () => {
		if (props.selected) {
			return (
				<Link to={`/polls/${props?.shopping_center?.id}/${props?.id}`}
					style={{
						'background-color': '#13808a'
					}}
				>
					Пройден!
				</Link >
			)
		}
		return (
			<Link to={`/polls/${props?.shopping_center?.id}/${props?.id}`}>
				Пройти →
			</Link>
		)
	}
	return (
		<div className={cls.wrap}>
			<div className={cls.title}>{props?.title}</div>
			<div className={cls.descr}>{props?.description}</div>
			<div className={cls.botRow}>
				{getLink()}
				<div className={cls.date}>
					{dayjs(props?.created_at).format('DD.MM.YYYY')}
				</div>
			</div>
		</div>
	)
}

export { PollPageListItem }