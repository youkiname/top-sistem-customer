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
			const res = await api.updateBalanceDueToChoice(centerId)
			api.saveVisitor(centerId)
			dispatch(setDataCard(res.data))
			return res.data
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)