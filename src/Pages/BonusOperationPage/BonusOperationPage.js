import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import cn from 'classnames'

import { Loader } from '../../Components/UI/Loader'
import { LayoutContent } from '../../Layouts/LayoutContent'
import { clearBonusState } from '../../Store/BonusState/bonusSlice'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'
import cls from '../QrScan/QrScan.module.scss'

import { BonusOperationFormDeal } from './Components/BonusOperationFormDeal'
import { BonusOperationFormInfo } from './Components/BonusOperationFormInfo'
import { BonusOperationFormTabs } from './Components/BonusOperationFormTabs'
import { useBonus } from './hook/useBonus'
import style from './scss/BonusOperation.module.scss'


const BonusOperationPage = () => {
	const { number } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		loading,
		changeModeHandler,
		mode,
		sum,
		sumInputHandler,
		cash,
		cashInputHandler,
		error,
		clientInfo,
		dataLoaded,
		onSubmitHandler,
		inputError,
		successTransaction
	} = useBonus(number)

	if (successTransaction) {
		return <Navigate to={`/success-transaction/${cash || 'err'}`} replace />
	}

	return (
		<>
			{!dataLoaded && !error ? <Loader /> : null}
			{loading && <Loader />}
			<div className={cls.qrScanPage}>
				<HeaderProfilePage avatar={false} />
				<LayoutContent>
					<h2>Операции с баллами</h2>
					{error && (
						<p className={style.errorNotFound}>
							Пользователь не найден,{' '}
							<span
								onClick={() => {
									navigate('/scan', { replace: true })
									dispatch(clearBonusState())
								}}
							>
								попробуйте снова
							</span>
						</p>
					)}
					{!error && dataLoaded ? (
						<>
							<BonusOperationFormInfo clientInfo={clientInfo} />
							<BonusOperationFormTabs handler={changeModeHandler} mode={mode} />
							<BonusOperationFormDeal
								mode={mode}
								sum={sum}
								sumInputHandler={sumInputHandler}
								cash={cash}
								cashInputHandler={cashInputHandler}
								error={error}
								inputError={inputError}
							/>
							<button
								onClick={onSubmitHandler}
								disabled={loading}
								className={cn(
									style.btn,
									mode === 'add' ? style.btnAdd : style.btnCharge
								)}
							>
								{loading
									? 'Подождите...'
									: mode === 'add'
										? 'Начислить'
										: 'Списать'}
							</button>
						</>
					) : null}
				</LayoutContent>
			</div>
		</>
	)
}

export default BonusOperationPage