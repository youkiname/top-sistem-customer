// noinspection JSCheckFunctionSignatures
import React, { useReducer } from 'react';



import { TOGGLE_OPEN } from '../../utils/types';



import { ModalContext } from './ModalContext';
import { modalReducer } from './ModalReducer';


export const ModalState = ({ children }) => {
	const initialState = {
		open: false,
		qrcode: '242342342'
	}

	const [state, dispatch] = useReducer(modalReducer, initialState)


	const toggleOpen = () => {
		dispatch({ type: TOGGLE_OPEN })
	}

	const { open } = state

	return (
		<ModalContext.Provider
			value={{
				open,
				toggleOpen
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}