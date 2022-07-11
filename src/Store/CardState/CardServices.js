import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../utils/api'

export const getCardData = createAsyncThunk(
	'card/getCardData',
	async ({ number }, { rejectWithValue }) => {
		try {
			const res = await api.getUserByCardNumber(number)
			return res.data.card
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)