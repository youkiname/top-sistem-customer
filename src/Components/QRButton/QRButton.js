import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ModalContext } from '../../Context/ModalContext/ModalContext'
import { QRCodeIcon } from '../UI/QRCodeIcon/QRCodeIcon'

import cls from './QRButton.module.scss'


const QRButton = () => {
	const { toggleOpen } = useContext(ModalContext)
	const { isManager } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	return (
		<button
			onClick={() =>
				isManager ? navigate('/scan', { replace: true }) : toggleOpen()
			}
			className={cls.wrapper}
		>
			<div className={cls.ellipse}>
				<QRCodeIcon size={20} />
			</div>
			<div className={cls.text}>
				{isManager ? 'Сканировать QR-код' : 'Показать QR-код'}
			</div>
		</button>
	)
}

export { QRButton }