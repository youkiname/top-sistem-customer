import React, { lazy } from 'react'

import { AuthPage } from '../Pages/AuthPage'
import MainPage from '../Pages/MainPage/MainPage'


const BonusOperationPage = lazy(() =>
	import('../Pages/BonusOperationPage/BonusOperationPage')
)
const CatalogItemPage = lazy(() =>
	import('../Pages/CatalogItemPage/CatalogItemPage')
)
const PollItemPage = lazy(() => import('../Pages/PollItemPage/PollItemPage'))
const PollsPageSC = lazy(() => import('../Pages/PollPageSC/PollsPageSC'))
const PollsMainPage = lazy(() => import('../Pages/PollsMainPage/PollsMainPage'))
const ProfilePage = lazy(() => import('../Pages/ProfilePage/ProfilePage'))
const QrScan = lazy(() => import('../Pages/QrScan/QrScan'))
const CatalogPage = lazy(() => import('../Pages/CatalogPage/CatalogPage'))
const VerifiedEmailPage = lazy(() =>
	import('../Pages/VerifiedEmailPage/VerifiedEmailPage')
)
const SuccessTransactionPage = lazy(() =>
	import('../Pages/SuccessTransactionPage/SuccessTransactionPage')
)
const ResetPassword = lazy(() => import('../Pages/ReserPassword/ResetPassword'))

export const routes = [
	{ path: '/', name: 'Main', authenticated: true, Component: MainPage },
	{
		path: '/profile',
		name: 'Profile',
		authenticated: true,
		Component: ProfilePage
	},
	{
		path: '/catalog',
		name: 'Catalog',
		authenticated: true,
		Component: CatalogPage
	},
	{
		path: '/catalog/:id',
		name: 'CatalogItemPage',
		authenticated: true,
		Component: CatalogItemPage
	},
	{
		path: '/auth',
		name: 'AuthPage',
		authenticated: false,
		Component: AuthPage
	},
	{ path: '/scan', name: 'QrScan', authenticated: true, Component: QrScan },
	{
		path: '/bonus/:number',
		name: 'Bonus',
		authenticated: true,
		Component: BonusOperationPage
	},
	{
		path: '/success-transaction/:bonusAmount',
		name: 'SuccessTransactionPage',
		authenticated: true,
		Component: SuccessTransactionPage
	},
	{
		path: '/verified/:emailParam',
		name: 'Verified Email',
		authenticated: true,
		Component: VerifiedEmailPage
	},
	{
		path: '/polls/:idSC',
		name: 'PollsPageSC',
		authenticated: true,
		Component: PollsPageSC
	},
	{
		path: '/polls/:idSC/:idPoll',
		name: 'PollItemPage',
		authenticated: true,
		Component: PollItemPage
	},
	{
		path: '/polls-page',
		name: 'PollsMainPage',
		authenticated: true,
		Component: PollsMainPage
	},
	{
		path: '/reset-pass',
		name: 'ResetPassword',
		authenticated: true,
		Component: ResetPassword
	}
]