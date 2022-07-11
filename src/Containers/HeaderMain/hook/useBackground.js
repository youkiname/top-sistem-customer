import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { backgrounds, gradientsStatus } from '../../../data/data'


export const useBackground = () => {
	const card = useSelector((state) => state.card)
	const { isManager } = useSelector((state) => state.auth)
	const [background, setBackground] = useState()
	const [gradient, setGradient] = useState()
	const { status = 'bronze' } = card
	const s = status.toLowerCase()

	const bgStyles = async () => {
		try {
			if (!!isManager) {
				const bgM = await backgrounds.find(
					(i) => i?.status.toLowerCase() === 'manager'
				)?.asset
				return { backgroundImage: `url('${bgM}')` }
			}
			const bg = await backgrounds.find((i) => i?.status === s)?.asset
			return { backgroundImage: `url('${bg}')` }
		} catch (e) {
			return { backgroundImage: `url('${background[0].asset}')` }
		}
	}

	const bgGradients = async () => {
		try {
			if (!!isManager) {
				return gradientsStatus.find((i) => i?.status === 'manager')?.asset
			} else {
				const bg = await gradientsStatus.find((i) => i?.status === s)
				return bg?.asset
			}
		} catch (e) {
			return gradientsStatus[0].asset
		}
	}

	useEffect(() => {
		bgGradients().then((res) => {
			setGradient(res)
		})
		bgStyles().then((res) => {
			setBackground(res)
		})
	}, [card])

	return {
		background,
		gradient
	}
}