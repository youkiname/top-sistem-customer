import { createSlice } from '@reduxjs/toolkit'

import {
	autoSign,
	register,
	setAuthData,
	signIn,
	verifiedEmail
} from './authServices'


const authSlice = createSlice({
	name: 'auth',
	initialState: {
		auth: true,
		role: '',
		isVerified: true,
		isManager: false,
		loading: true,
		error: false,
		errorMessage: '',
		userData: {}
	},
	reducers: {
		signOut(state, action) {
			state.auth = false
			state.role = ''
			state.isManager = false
			state.userData = {}
			localStorage.clear()
		},
		clearErrors(state, action) {
			state.error = false
			state.loading = false
			state.errorMessage = ''
		},
		setAuthFalse(state, action) {
			state.auth = false
		}
	},
	extraReducers: {
		[setAuthData.pending]: (state) => {
			state.loading = true
		},
		[setAuthData.fulfilled]: (state, { payload }) => {
			state.auth = true
			state.role = payload?.role
			state.isVerified = payload.isVerified
			state.isManager = payload?.isManager
			state.userData = { ...payload.userData }
		},
		[setAuthData.rejected]: (state, action) => {
			state.loading = false
			state.error = true
			state.errorMessage = action.payload
		},
		[signIn.pending]: (state) => {
			state.loading = true
			state.error = false
		},
		[signIn.fulfilled]: (state, action) => {
			state.auth = action.payload
			state.loading = false
		},
		[signIn.rejected]: (state, action) => {
			state.auth = false
			state.error = true
			state.loading = false
			state.errorMessage = action.payload
		},
		[autoSign.pending]: (state, action) => {
			state.loading = true
		},
		[autoSign.rejected]: (state, action) => {
			state.auth = false
			state.error = true
			state.errorMessage = action.payload?.message
			state.loading = false
		},
		[register.pending]: (state) => {
			state.loading = true
			state.error = false
		},
		[register.fulfilled]: (state) => {
			state.loading = false
		},
		[register.rejected]: (state, action) => {
			state.loading = false
			state.error = true
			state.errorMessage = action.payload
		},
		[verifiedEmail.pending]: (state) => {
			state.loading = true
		},
		[verifiedEmail.fulfilled]: (state, { payload }) => {
			state.isVerified = payload.success
			state.loading = false
		},
		[verifiedEmail.rejected]: (state) => {
			state.loading = false
			state.error = true
		}
	}
})

export const { signOut, clearErrors, setAuthFalse } = authSlice.actions
export default authSlice.reducer