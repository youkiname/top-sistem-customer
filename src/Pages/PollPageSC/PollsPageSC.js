import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import api from '../../utils/api'
import cls from '../CatalogPage/CatalogPage.module.scss'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import styles from './PollPageSc.module.scss'
import { PollPageListItem } from './components/PollPageListItem/PollPageListItem'


const PollsPageSC = () => {
	const { idSC } = useParams()
	const [loading, setLoading] = useState(true)
	const [err, setErr] = useState(false)
	const [dataOfSC, setDataOfSC] = useState({})
	const [pollsList, setPollsList] = useState([])

	useEffect(() => {
		api
			.getPollBySCId(idSC)
			.then((res) => {
				setPollsList(res?.data)
				setDataOfSC(res?.data[0].shopping_center)
			})
			.catch(() => setErr(true))
			.finally(() => setLoading(false))
	}, [])

	const checkHandler = (id) => { }

	return (
		<div className={cls.catalogPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<h2>Опросы {!loading && `– ${dataOfSC.name}`}</h2>
				{loading && <Loader onlyLoader={true} transparent={false} />}

				{!loading && !err ? (
					<div className={styles.listwrap}>
						{pollsList.map((item) => (
							<PollPageListItem {...item} key={item.id} />
						))}
					</div>
				) : null}
			</LayoutContent>
			<FooterPanel active={'messenger'} />
		</div>
	)
}

export default PollsPageSC