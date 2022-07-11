import React from 'react'
import { useParams } from 'react-router-dom'

import cn from 'classnames'

import { FooterPanel } from '../../Components/FooterPanel'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import cls from '../CatalogPage/CatalogPage.module.scss'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import styles from './PollItemPage.module.scss'
import { usePoll } from './hook/usePoll'


const PollItemPage = () => {
	const { idPoll } = useParams()
	const {
		loading,
		err,
		pollData,
		checkState,
		checkHandler,
		alreadyCheck,
		submitHandler
	} = usePoll(idPoll)

	return (
		<div className={cls.catalogPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				{err && 'Что-то пошло не так... Попробуйте ещё раз!'}
				{loading ? (
					<Loader transparent={false} onlyLoader={true} />
				) : (
					<>
						<h2>{pollData?.title || 'Заголовок опроса'}</h2>
						<p>{pollData?.description || 'Описание опроса'}</p>
						<div className={styles.polls}>
							{pollData?.choices.map((item, idx) => {
								const id = item.id.toString()
								return (
									<div
										key={id}
										className={cn(
											styles.pollBody,
											id === checkState && styles.checkedPoll
										)}
									>
										<input
											type='radio'
											id={id}
											disabled={alreadyCheck}
											checked={id === checkState}
											onChange={() => checkHandler(id)}
										/>
										<label htmlFor={id}>{item?.title}</label>
									</div>
								)
							})}
						</div>
						<button
							disabled={alreadyCheck || loading}
							className={styles.pollButton}
							onClick={submitHandler}
						>
							{alreadyCheck && !loading ? 'Спасибо за ответ!' : 'Ответить'}
						</button>
					</>
				)}
			</LayoutContent>
			<FooterPanel active={'messenger'} />
		</div>
	)
}

export default PollItemPage