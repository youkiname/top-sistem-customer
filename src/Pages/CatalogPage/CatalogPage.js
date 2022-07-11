import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { FooterPanel } from '../../Components/FooterPanel'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import cls from './CatalogPage.module.scss'
import { CatalogList } from './Components/CatalogList/CatalogList'


const CatalogPage = () => {
	const { loading, centers, cities, error, errMessage } = useSelector(
		(state) => state.shoppingCenters
	)

	return (
		<div className={cls.catalogPage}>
			{loading && <Loader />}
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<h2>Торговые центры</h2>
				{/*<NearestCenter />*/}
				<CatalogList catalog={centers} cities={cities} />
				{error && (
					<p>
						Что-то пошло не так! Попробуйте перезагрузить страницу и попробовать
						снова
					</p>
				)}
			</LayoutContent>
			<FooterPanel active={'catalog'} />
		</div>
	)
}

export default CatalogPage