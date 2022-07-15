import React from 'react'

import cls from './AdsBlock.module.scss'


const AdsBlock = ({ asset, loading }) => {
	const goToAdsLink = () => {
		window.open(asset.link, '_blank').focus();
	}
	return (
		<div className={cls.wrapper}>
			<img src={asset?.image_link} alt='' onClick={goToAdsLink} />
		</div>
	)
}

export { AdsBlock }