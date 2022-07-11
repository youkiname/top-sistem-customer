import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../utils/api'

import { setDataUser } from './userSlice'


export const updateUserProfile = createAsyncThunk(
	'user/updateUserProfile',
	async ({ id, firstName, lastName, phone }, { rejectWithValue, dispatch }) => {
		try {
			const res = await api.updateProfile(id, firstName, lastName, phone)
			dispatch(setDataUser(res.data))
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)