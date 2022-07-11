import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../utils/api'

export const getClientInfoAfterScan = createAsyncThunk(
	'bonus/getClientInfoAfterScan',
	async ({ number }, { rejectWithValue }) => {
		try {
			const response = await api.getUserByCardNumber(number)
			return response.data
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const runBonusTransaction = createAsyncThunk(
	'bonus/runBonusTransaction',
	async ({ number, bonus, mode }, { rejectWithValue }) => {
		try {
			await api.postBonusTransaction(number, bonus, mode)
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)