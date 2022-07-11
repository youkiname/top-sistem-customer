import React, { useContext } from 'react'

import cn from 'classnames'

import { ModalContext } from '../../Context/ModalContext/ModalContext'

import cls from './ModalAlternative.module.scss'


const Modal = ({ subContent, children }) => {
	const { toggleOpen, open } = useContext(ModalContext)

	return (
		<div
			className={cn(cls.modal, open && cls.active)}
			onClick={() => toggleOpen()}
		>
			<div onClick={(e) => e.stopPropagation()} className={cls.modalContent}>
				{children}
			</div>
			<div
				onClick={(e) => e.stopPropagation()}
				className={cn(cls.subContent, cls.modalContent)}
			>
				{subContent}
			</div>
			<div className={cls.closeBtn} />
		</div>
	)
}

export { Modal }