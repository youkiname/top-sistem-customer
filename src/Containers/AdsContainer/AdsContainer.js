import React, { useEffect, useState } from 'react'

import { AdsBlock } from '../../Components/AdsBlock'
import api from '../../utils/api'

import cls from './AdsContainer.module.scss'


const AdsContainer = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [assets, setAssets] = useState([])
	const getBanners = async () => {
		const res = await api.getAdsImages()
		setAssets(res.data)
	}

	useEffect(() => {
		if (!assets.length) {
			setLoading(true)
			getBanners()
				.then(setLoading(false))
				.catch(() => {
					setLoading(false)
					setError(true)
				})
		}
	})

	if (!loading) {
		return (
			<div className={cls.wrapper}>
				<div className={cls.adsItem}>
					<AdsBlock loading={loading} asset={assets[0]} />
				</div>
				<div className={cls.adsItem}>
					<AdsBlock loading={loading} asset={assets[1]} />
				</div>
			</div>
		)
	}
}

export { AdsContainer }