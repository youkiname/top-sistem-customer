import React from 'react'
import { useForm } from 'react-hook-form'
import { TiWarning } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'

import { signOut } from '../../../../Store/AuthState/authSlice'
import { updateUserProfile } from '../../../../Store/UserState/userServices'
import { cardFormatter } from '../../../../utils/cardFormatter'

import cls from './ProfileForm.module.scss'


const ProfileForm = () => {
	const card = useSelector((state) => state.card)
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm({
		mode: 'all',
		defaultValues: {
			cardNumber: cardFormatter(card.number),
			email: user.email,
			phone: user.phone,
			firstName: user.firstName,
			lastName: user.lastName
		}
	})

	const handleForm = async (data) => {
		const dataForSend = {
			firstName: data.firstName,
			lastName: data.lastName,
			phone: data.phone,
			id: user.id
		}
		dispatch(updateUserProfile(dataForSend))
	}

	return (
		<div className={cls.wrapper}>
			<div className={cls.title}>Информация о профиле</div>
			<form onSubmit={handleSubmit(handleForm)} className={cls.formWrap}>
				{/*Card Number*/}
				<div className={cls.formItem}>
					<label>№ карты</label>
					<input className={cls.input} disabled {...register('cardNumber')} />
				</div>
				{/*E-mail*/}
				<div className={cls.formItem}>
					<label>Email</label>
					<input disabled type='email' {...register('email')} />
				</div>
				{/*First Name*/}
				<div className={cls.formItem}>
					<label>Имя</label>
					<input
						disabled={user.loading}
						className={cls.input}
						{...register('firstName', {
							required: true
						})}
					/>
					<div className={cls.errMsg}>
						{errors?.firstName && (
							<span>
								<TiWarning />
								{errors?.firstName?.message || 'Введите корректное значение'}
							</span>
						)}
					</div>
				</div>

				{/*Last Name*/}
				<div className={cls.formItem}>
					<label>Фамилия</label>
					<input
						disabled={user.loading}
						className={cls.input}
						{...register('lastName', {
							required: true
						})}
					/>
					<div className={cls.errMsg}>
						{errors?.lastName && (
							<span>
								<TiWarning />
								{errors?.lastName?.message || 'Введите корректное значение'}
							</span>
						)}
					</div>
				</div>

				{/*/!*Sex*!/*/}
				{/*/!*...select form*!/*/}
				{/*<div className={cls.formItem}>*/}
				{/*	<label>Пол</label>*/}
				{/*	<select*/}
				{/*		{...register('sex', {*/}
				{/*			value: user.sex*/}
				{/*		})}*/}
				{/*	>*/}
				{/*		<option value='male'>Мужской</option>*/}
				{/*		<option value='female'>Женский</option>*/}
				{/*	</select>*/}
				{/*</div>*/}

				{/*Phone*/}
				<div className={cls.formItem}>
					<label>Мобильный телефон</label>

					<input
						disabled={user.loading}
						{...register('phone', {
							minLength: 10
						})}
					/>

					<div className={cls.errMsg}>
						{errors?.phone && (
							<span>
								<TiWarning />
								{errors?.phone?.message || 'Введите корректное значение'}
							</span>
						)}
					</div>
				</div>
				<button className={cls.btn} disabled={user.loading}>
					{!user.loading ? 'Сохранить' : 'Загрузка...'}
				</button>
			</form>
			<button onClick={() => dispatch(signOut())} className={cls.signOutBtn}>
				Выйти
			</button>
			<p style={{ margin: '0 auto', display: 'block' }}>Build 1.8.4 PWA</p>
		</div>
	)
}

export { ProfileForm }