import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../utils/api'
import { setDataCard } from '../CardState/cardSlice'


export const getShoppingCenters = createAsyncThunk(
	'shoppingCenters/getShoppingCenters',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.getShoppingCenters()
			const data = await response.data
			const cities = [...new Set(data.map((i) => i.city.name))]
			return { data, cities }
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const selectShoppingCenter = createAsyncThunk(
	'shoppingCenters/selectShoppingCenter',
	async ({ userId, centerId }, { rejectWithValue, dispatch }) => {
		try {
			const res = await api.updateBalanceDueToChoice(userId, centerId)
			dispatch(setDataCard(res.data.card))
			return res.data.card
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)