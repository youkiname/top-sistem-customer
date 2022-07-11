import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import axios from 'axios'

import { FooterPanel } from '../../Components/FooterPanel'
import { ShopsList } from '../../Components/ShopsList'
import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import cls from '../CatalogPage/CatalogPage.module.scss'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'

import { CatalogItemPreview } from './Components/CatalogItemPreview/CatalogItemPreview'


const CatalogItemPage = () => {
	const { centers } = useSelector((state) => state.shoppingCenters)
	let { id: itemId } = useParams()
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState()
	const [err, setErr] = useState(false)

	useEffect(() => {
		setLoading(true)
		const options = {
			method: 'GET',
			url: `https://top-sistem.ru/api/shopping_centers/${itemId}`
		}

		axios
			.request(options)
			.then(function (response) {
				setData(response.data)
			})
			.catch(function (error) {
				setErr(true)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	if (loading) {
		return <Loader />
	}

	if (err) {
		return <p>Произошла ошибка, попробуйте еще раз</p>
	}

	if (!loading) {
		return (
			<div className={cls.catalogPage}>
				<HeaderProfilePage avatar={false} />
				<LayoutContent>
					<CatalogItemPreview {...data} />
					{!loading && <ShopsList {...data} />}
				</LayoutContent>
				<FooterPanel active={'catalog'} />
			</div>
		)
	}
}

export default CatalogItemPage