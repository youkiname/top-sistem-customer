import { createSlice } from '@reduxjs/toolkit'

import { getClientInfoAfterScan, runBonusTransaction } from './bonusServices'


const bonusSlice = createSlice({
	name: 'bonus',
	initialState: {
		loading: false,
		mode: 'add',
		error: false,
		dataLoaded: false,
		clientInfo: '',
		clientInfoAfterTransaction: ''
	},
	reducers: {
		setMode(state, action) {
			if (state.clientInfo.card.bonuses_amount === 0) {
				state.mode = 'add'
			} else {
				state.mode = state.mode === 'charge' ? 'add' : 'charge'
			}
		},
		clearBonusState(state, action) {
			state.loading = false
			state.error = false
			state.dataLoaded = false
			state.clientInfo = ''
			state.clientInfoAfterTransaction = ''
			state.successTransaction = false
			state.mode = 'add'
		}
	},
	extraReducers: {
		[getClientInfoAfterScan.pending]: (state) => {
			state.loading = true
		},
		[getClientInfoAfterScan.fulfilled]: (state, action) => {
			state.loading = false
			state.dataLoaded = true
			state.clientInfo = action.payload
		},
		[getClientInfoAfterScan.rejected]: (state, action) => {
			state.error = true
			state.loading = false
		},
		[runBonusTransaction.pending]: (state) => {
			state.loading = true
			state.error = false
		},
		[runBonusTransaction.fulfilled]: (state, action) => {
			state.loading = false
			state.successTransaction = true
		},
		[runBonusTransaction.rejected]: (state) => {
			state.loading = false
			state.error = true
		}
	}
})

export const { setMode, clearBonusState } = bonusSlice.actions
export default bonusSlice.reducer