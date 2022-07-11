import React from 'react'

import cls from './AdsBlock.module.scss'


const AdsBlock = ({ asset, loading }) => {
	return (
		<div className={cls.wrapper}>
			<img src={'https://api.top-sistem.ru' + asset?.image_link} alt='' />
		</div>
	)
}

export { AdsBlock }