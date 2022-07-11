import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	getClientInfoAfterScan,
	runBonusTransaction
} from '../../../Store/BonusState/bonusServices'
import { setMode } from '../../../Store/BonusState/bonusSlice'


const useBonus = (number) => {
	const [sum, setSum] = useState('')
	const [cash, setCash] = useState('')
	const [inputError, setInputError] = useState(false)
	const { cashbackPercent } = useSelector((state) => state.user)
	const { loading, error, clientInfo, mode, dataLoaded, successTransaction } =
		useSelector((state) => state.bonus)
	const balance = clientInfo?.card?.bonuses_amount
	const dispatch = useDispatch()

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(getClientInfoAfterScan({ number }))
		}
		// return () => {
		// 	dispatch(clearBonusState())
		// }
	}, [dataLoaded])

	const sumInputHandler = (val) => {
		setSum(val)
		if (mode === 'add') {
			const calculatedAmount = Math.floor(sum * (cashbackPercent / 100))
			cashInputHandler(calculatedAmount)
		}
	}

	const cashInputHandler = (val) => {
		setCash(val)
	}

	const onSubmitHandler = () => {
		try {
			if (cash <= 0 || sum === '' || cash === '') {
				throw new Error('inputError')
			}
			setInputError(false)
			const forSend = {
				number: clientInfo.card.number || number,
				bonus: cash,
				mode: mode === 'add' ? '' : '-'
			}
			console.log(forSend, mode)
			dispatch(runBonusTransaction(forSend))
		} catch (e) {
			e.message === 'inputError' && setInputError(true)
		}
	}

	const changeModeHandler = (click) => {
		click && setCash('')
		if (
			(click === 'add' && mode === 'add') ||
			(click === 'charge' && mode === 'charge')
		) {
		} else {
			dispatch(setMode())
		}
	}

	return {
		loading,
		mode,
		changeModeHandler,
		sum,
		sumInputHandler,
		cash,
		cashInputHandler,
		error,
		clientInfo,
		dataLoaded,
		onSubmitHandler,
		inputError,
		successTransaction
	}
}

export { useBonus }