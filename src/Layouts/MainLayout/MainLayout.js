import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { QRRender } from '../../Components/QRRender/QRRender'
import { Modal } from '../../Containers/Modal'
import { ModalContext } from '../../Context/ModalContext/ModalContext'
import { cardFormatter } from '../../utils/cardFormatter'

import styles from './MainLayout.module.scss'


export const MainLayout = ({ children }) => {
	const modalState = useContext(ModalContext)
	const { number } = useSelector((state) => state.card)

	return (
		<main className={styles.mainLayout}>
			<CSSTransition
				in={modalState.open}
				timeout={300}
				classNames='alert'
				unmountOnExit
			>
				<Modal subContent={cardFormatter(number)} active={modalState.open}>
					<QRRender />
				</Modal>
			</CSSTransition>

			{children}
		</main>
	)
}