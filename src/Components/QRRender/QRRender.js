import { QRCodeSVG } from 'qrcode.react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const QRRender = () => {
	const { number } = useSelector((state) => state.card)
	const { isVerified } = useSelector((state) => state.auth)

	if (number === '') {
		return 'Loading...'
	}

	if (!isVerified) {
		return <Link to='/verified/ne'>Подтвердите e-mail</Link>
	}

	return (
		<QRCodeSVG
			value={number}
			size={230}
			bgColor={'#fff'}
			fgColor={'#000'}
			includeMargin={false}
			level={'L'}
		/>
	)
}

export { QRRender }