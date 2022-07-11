import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { useBackground } from '../../Containers/HeaderMain/hook/useBackground'
import { ModalContext } from '../../Context/ModalContext/ModalContext'
import { QRCodeIcon } from '../UI/QRCodeIcon/QRCodeIcon'

import cls from './FooterPanel.module.scss'


const FooterPanelUI = (props) => {
	const { activeState, activeIcon, notActiveIcon } = props
	const modalState = useContext(ModalContext)
	const card = useSelector((state) => state.card)
	const { isManager } = useSelector((state) => state.auth)
	const { gradient } = useBackground()
	const navigate = useNavigate()

	return (
		<div className={cls.wrapper}>
			<div className={cls.rightSide}>
				<Link to={'/'}>
					<div className={cls.menuItemWrapper}>
						<div className={cls.menuIcon}>
							<svg
								width='19'
								height='20'
								viewBox='0 0 19 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M7.681 0.614369L1.181 5.5705C0.436767 6.13796 0 7.02024 0 7.95613V15.8437C0 18.0529 1.79086 19.8437 4 19.8437H5.33333C5.88562 19.8437 6.33333 19.396 6.33333 18.8437V16.2718C6.33333 15.1672 7.22876 14.2718 8.33333 14.2718H10.1389C11.2435 14.2718 12.1389 15.1672 12.1389 16.2718V18.8437C12.1389 19.396 12.5866 19.8437 13.1389 19.8437H15C17.2091 19.8437 19 18.0529 19 15.8437V13.1574V7.95613C19 7.02024 18.5632 6.13796 17.819 5.5705L11.319 0.614367C10.2447 -0.20479 8.75533 -0.204788 7.681 0.614369ZM7.61112 8.55098C7.19691 8.55098 6.86112 8.88677 6.86112 9.30098C6.86112 9.7152 7.19691 10.051 7.61112 10.051H11.3889C11.8031 10.051 12.1389 9.7152 12.1389 9.30098C12.1389 8.88677 11.8031 8.55098 11.3889 8.55098H7.61112Z'
									fill={activeState.home ? activeIcon : notActiveIcon}
								/>
							</svg>
						</div>
						<div className={cls.menuText}>Главная</div>
					</div>
				</Link>
				<Link to={'/catalog'}>
					<div className={cls.menuItemWrapper}>
						<div className={cls.menuIcon}>
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18.5547 5C18.5547 2.23858 16.3161 0 13.5547 0L5 0C2.23858 0 -3.04542e-07 2.23858 -3.04542e-07 5V14C-3.04542e-07 16.7614 2.23858 19 5 19H13.5547C16.3161 19 18.5547 16.7614 18.5547 14V5ZM9.79273 5.49998C10.2069 5.49998 10.5427 5.1642 10.5427 4.74998C10.5427 4.33577 10.2069 3.99998 9.79273 3.99998L5.15405 3.99998C4.73984 3.99998 4.40405 4.33577 4.40405 4.74998C4.40405 5.1642 4.73984 5.49998 5.15405 5.49998L9.79273 5.49998ZM14.1506 9.50004C14.1506 9.91425 13.8148 10.25 13.4006 10.25L5.15405 10.25C4.73984 10.25 4.40405 9.91425 4.40405 9.50004C4.40405 9.08583 4.73984 8.75004 5.15405 8.75004L13.4006 8.75004C13.8148 8.75004 14.1506 9.08583 14.1506 9.50004ZM9.79273 15C10.2069 15 10.5427 14.6642 10.5427 14.25C10.5427 13.8358 10.2069 13.5 9.79273 13.5H5.15405C4.73984 13.5 4.40405 13.8358 4.40405 14.25C4.40405 14.6642 4.73984 15 5.15405 15H9.79273Z'
									fill={activeState.catalog ? activeIcon : notActiveIcon}
								/>
							</svg>
						</div>
						<div className={cls.menuText}>Каталог ТЦ</div>
					</div>
				</Link>
			</div>
			<div
				className={cls.center}
				onClick={() =>
					isManager
						? navigate('/scan', { replace: true })
						: modalState.toggleOpen()
				}
			>
				<div className={cls.qrWrapper} style={{ background: gradient }}>
					<div className={cls.qrIcon}>
						<QRCodeIcon size={40} />
					</div>
					{!isManager ? (
						<div className={cls.count}>{card.bonusAmount}</div>
					) : (
						<div className={cls.countManager}>сканировать</div>
					)}
				</div>
			</div>
			<div className={cls.leftSide}>
				<Link to={'/polls-page'}>
					<div className={cls.menuItemWrapper}>
						<div className={cls.menuIcon}>
							<svg
								width='20'
								height='19'
								viewBox='0 0 20 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18.8151 5.81876C18.3384 4.68327 17.6448 3.65119 16.773 2.78004C15.9038 1.90737 14.8714 1.21355 13.7342 0.737965C12.5693 0.248401 11.3177 -0.00254963 10.0537 1.95287e-05H10.0112C8.72556 0.00638113 7.48242 0.260845 6.31154 0.761291C5.18416 1.24175 4.16139 1.93681 3.3004 2.80761C2.43707 3.6768 1.75141 4.70527 1.28163 5.83573C0.793972 7.01127 0.546873 8.27228 0.554876 9.54454C0.561251 11.0162 0.914003 12.4772 1.57276 13.7835V17.0067C1.57276 17.5453 2.01051 17.9821 2.54814 17.9821H5.77391C7.08903 18.6444 8.54027 18.9928 10.0133 19H10.0579C11.3287 19 12.5591 18.754 13.7193 18.2727C14.8507 17.8027 15.8793 17.117 16.7475 16.2539C17.623 15.3866 18.3115 14.373 18.7939 13.2428C19.2933 12.0722 19.5483 10.8275 19.5546 9.54242C19.5589 8.25102 19.3081 6.99778 18.8151 5.81876ZM5.81216 10.5179C5.25116 10.5179 4.79428 10.062 4.79428 9.50001C4.79428 8.93807 5.25116 8.48215 5.81216 8.48215C6.37317 8.48215 6.83004 8.93807 6.83004 9.50001C6.83004 10.062 6.37529 10.5179 5.81216 10.5179ZM10.0537 10.5179C9.49269 10.5179 9.03581 10.062 9.03581 9.50001C9.03581 8.93807 9.49269 8.48215 10.0537 8.48215C10.6147 8.48215 11.0716 8.93807 11.0716 9.50001C11.0716 10.062 10.6147 10.5179 10.0537 10.5179ZM14.2952 10.5179C13.7342 10.5179 13.2773 10.062 13.2773 9.50001C13.2773 8.93807 13.7342 8.48215 14.2952 8.48215C14.8562 8.48215 15.3131 8.93807 15.3131 9.50001C15.3131 10.062 14.8562 10.5179 14.2952 10.5179Z'
									fill={activeState.messenger ? activeIcon : notActiveIcon}
								/>
							</svg>
						</div>
						<div className={cls.menuText}>Опросы</div>
					</div>
				</Link>
				<Link to={'/profile'}>
					<div className={cls.menuItemWrapper}>
						<div className={cls.menuIcon}>
							<svg
								width='17'
								height='19'
								viewBox='0 0 17 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M13.2012 4.75001C13.2012 7.37336 11.0235 9.50001 8.33715 9.50001C5.65083 9.50001 3.47314 7.37336 3.47314 4.75001C3.47314 2.12665 5.65083 0 8.33715 0C11.0235 0 13.2012 2.12665 13.2012 4.75001Z'
									fill={activeState.profile ? activeIcon : notActiveIcon}
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3.84287 10.9986C1.96574 11.2278 0.554688 12.8215 0.554688 14.7126V15.2585C0.554688 17.3249 2.22983 19 4.29623 19H12.378C14.4444 19 16.1195 17.3249 16.1195 15.2585V14.7126C16.1195 12.8215 14.7085 11.2278 12.8313 10.9986L8.79047 10.5054C8.48934 10.4686 8.18486 10.4686 7.88373 10.5054L3.84287 10.9986ZM9.58119 15.6531C9.96864 15.6531 10.2827 15.339 10.2827 14.9516C10.2827 14.5641 9.96864 14.25 9.58119 14.25L7.09306 14.25C6.70561 14.25 6.39152 14.5641 6.39152 14.9516C6.39152 15.339 6.70561 15.6531 7.09306 15.6531L9.58119 15.6531Z'
									fill={activeState.profile ? activeIcon : notActiveIcon}
								/>
							</svg>
						</div>
						<div className={cls.menuText}>Профиль</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export { FooterPanelUI }