import { configureStore } from '@reduxjs/toolkit'

import authReducer from './AuthState/authSlice'
import bonusReducer from './BonusState/bonusSlice'
import cardReducer from './CardState/cardSlice'
import shoppingCentersReducer from './ShoppingCenters/shoppingCentersSlice'
import userReducer from './UserState/userSlice'


export default configureStore({
	reducer: {
		user: userReducer,
		card: cardReducer,
		auth: authReducer,
		shoppingCenters: shoppingCentersReducer,
		bonus: bonusReducer
	}
})