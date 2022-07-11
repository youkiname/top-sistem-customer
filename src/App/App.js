import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from '../Components/ScrollToTop'
import { Loader } from '../Components/UI/Loader'
import { ModalState } from '../Context/ModalContext/ModalState'
import { MainLayout } from '../Layouts/MainLayout/MainLayout'
import { autoSign } from '../Store/AuthState/authServices'
import { getShoppingCenters } from '../Store/ShoppingCenters/shoppingCentersServices'
import { routes } from '../utils/routes'

import './App.module.scss'


function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		Promise.race([dispatch(autoSign()), dispatch(getShoppingCenters())]).then(
			() => {}
		)
	}, [])

	return (
		<ModalState>
			<MainLayout>
				<BrowserRouter>
					<ScrollToTop />
					<React.Suspense fallback={<Loader transparent={false} />}>
						<Routes>
							{routes.map(({ path, Component }) => {
								return (
									<Route
										key={path}
										path={path}
										exact={path === '/'}
										element={<Component />}
									/>
								)
							})}
						</Routes>
					</React.Suspense>
				</BrowserRouter>
			</MainLayout>
		</ModalState>
	)
}

export default App