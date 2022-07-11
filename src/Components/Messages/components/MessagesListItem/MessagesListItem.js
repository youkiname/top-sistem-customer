import React from 'react'
import { useNavigate } from 'react-router-dom'

import cn from 'classnames'

import cls from '../../scss/Messages.module.scss'


const MessagesListItem = (props) => {
	const navigate = useNavigate()
	const countUnreadPolls = props?.unselected_polls_amount

	const onclickHandler = () => {
		navigate(`/polls/${props?.id}`)
	}

	return (
		<div onClick={() => onclickHandler()} className={cls.listItemWrapper}>
			<div className={cls.avatar}>
				{props?.avatar_link ? (
					<img src={props?.avatar_link} alt='' />
				) : (
					<div className={cls.placeholder}>
						<span>{props?.name[0].toString().toUpperCase()}</span>
					</div>
				)}
			</div>
			<div className={cls.body}>
				<div className={cls.name}>
					{props?.name}{' '}
					{countUnreadPolls > 0 && (
						<span className={cls.indicator}>{countUnreadPolls}</span>
					)}
				</div>
				<div className={cn(cls.text, countUnreadPolls > 0 && cls.newMsgText)}>
					{props?.description}
				</div>
			</div>
		</div>
	)
}

export { MessagesListItem }