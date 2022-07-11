import { createSlice } from '@reduxjs/toolkit'

import { updateUserProfile } from './userServices'


const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: '',
		firstName: '',
		lastName: '',
		age: '',
		city: '',
		sex: '',
		email: '',
		phone: '',
		avatar: '',
		coords: [],
		cashbackPercent: 4,
		loading: false,
		error: false
	},
	reducers: {
		setDataUser(state, { payload }) {
			state.id = payload?.id
			state.firstName = payload?.first_name
			state.lastName = payload?.last_name
			state.email = payload?.email
			state.age = payload?.age
			state.avatar = payload?.avatar
			state.phone = payload?.mobile
			state.cashbackPercent = payload?.cashback === null ? 4 : payload?.cashback
			state.avatar = payload?.avatar_link
		},
		setCoords(state, { payload }) {
			state.coords = payload
		}
	},
	extraReducers: {
		[updateUserProfile.pending]: (state) => {
			state.loading = true
		},
		[updateUserProfile.fulfilled]: (state) => {
			state.loading = false
			state.error = false
		},
		[updateUserProfile.rejected]: (state) => {
			state.loading = false
			state.error = true
		}
	}
})

export const { setDataUser, setCoords } = userSlice.actions

export default userSlice.reducer