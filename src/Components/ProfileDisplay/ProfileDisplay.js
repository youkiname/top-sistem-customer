import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import placeholderAvatar from '../../img/placeholderAvatar.png'

import cls from './scss/ProfileDisplay.module.scss'


const ProfileDisplay = ({ type }) => {
	const user = useSelector((state) => state.user)
	const { isManager } = useSelector((state) => state.auth)

	const full = type === 'full'
	return (
		<div
			className={full ? cls.ProfileDisplayWrap : cls.ProfileDisplayWrapLight}
		>
			<div className={full ? cls.avatar : cls.avatarLight}>
				<img src={user.avatar || placeholderAvatar} alt='UserAvatar' />
			</div>
			<div className={full ? cls.nameWrap : cls.nameWrapLight}>
				<div className={full ? cls.name : cls.nameLight}>
					{`${user?.firstName} ${user?.lastName}` || 'Имя пользователя'}
				</div>
				{isManager && <div style={{ fontSize: 12 }}>Профиль продавца</div>}
				{full && (
					<Link
						to={'/profile'}
						className={full ? cls.editProfile : cls.editProfileLight}
					>
						Редактировать профиль
					</Link>
				)}
			</div>
		</div>
	)
}

export { ProfileDisplay }