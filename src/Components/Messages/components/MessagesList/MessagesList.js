import React from 'react'

import cls from '../../scss/Messages.module.scss'
import { MessagesListItem } from '../MessagesListItem/MessagesListItem'


const MessagesList = (props) => {
	return (
		<div className={cls.listWrapper}>
			{props.list.map((item, idx) => (
				<MessagesListItem {...item} key={idx} />
			))}
		</div>
	)
}

export { MessagesList }