import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useForm } from 'react-hook-form'
import { TiWarning } from 'react-icons/ti'
import { useSelector } from 'react-redux'

import ru from 'date-fns/locale/ru'

import { emailReg, phoneReg } from '../../../data/regexp'
import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'
import { useAuthPage } from '../hook/useAuthPage'


registerLocale('ru', ru)

const RegisterForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		control
	} = useForm({
		mode: 'all'
	})
	const { registerHandler } = useAuthPage()
	const { loading } = useSelector((state) => state.auth)


	return (
		<form onSubmit={handleSubmit(registerHandler)}>
			<div className={cls.formItem}>
				<label>E-mail</label>
				<input
					placeholder='mail@post.ru'
					{...register('email', {
						required: 'Введите e-mail',
						pattern: {
							value: emailReg(),
							message: 'Введите корректный e-mail'
						}
					})}
				/>
				<div className={cls.errMsg}>
					{errors?.email && (
						<span>
							<TiWarning />
							{errors?.email?.message || 'Введите корректное значение'}
						</span>
					)}
				</div>
			</div>

			<div className={cls.formItem}>
				<label>Пароль</label>
				<input
					type='password'
					placeholder='********'
					{...register('password', {
						required: 'Введите пароль',
						minLength: { value: 8, message: 'Минимум 8 символа' }
					})}
				/>
				<div className={cls.errMsg}>
					{errors?.password && (
						<span>
							<TiWarning />
							{errors?.password?.message || 'Введите корректное значение'}
						</span>
					)}
				</div>
			</div>

			<div className={cls.formItem}>
				<label>Имя</label>
				<input
					type='text'
					placeholder='Имя'
					{...register('name', {
						required: 'Введите имя'
					})}
				/>
				<div className={cls.errMsg}>
					{errors?.name && (
						<span>
							<TiWarning />
							{errors?.name?.message || 'Введите корректное значение'}
						</span>
					)}
				</div>
			</div>

			<div className={cls.formItem}>
				<label>Фамилия</label>
				<input
					type='text'
					placeholder='Фамилия'
					{...register('lastName', {
						required: 'Введите Фамилия'
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

			<div className={cls.formItem}>
				<label>Пол</label>
				<select placeholder='Выберите...' {...register('sex', {})}>
					<option value='male'>Мужчина</option>
					<option value='female'>Женщина</option>
				</select>
			</div>

			<div className={cls.formItem}>
				<label>Номер телефона</label>
				<input
					placeholder='+7 XXX XXXXXXX'
					{...register('phone', {
						minLength: 10,
						pattern: {
							value: phoneReg(),
							message: 'Введите телефон в формате +7ХХХХХХХХХХ'
						}
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

			<div className={cls.formItem}>
				<Controller
					control={control}
					name='birth'
					render={({ field: { onChange, onBlur, value } }) => (
						<>
							<label>Дата рождения</label>
							<DatePicker
								dateFormat='dd.MM.yyyy'
								locale='ru'
								onChange={onChange}
								onBlur={onBlur}
								selected={value}
							/>
						</>
					)}
				/>
			</div>

			<button className={cls.btn}>
				{!loading ? 'Зарегистрироваться' : 'Загрузка...'}
			</button>
		</form>
	)
}

export { RegisterForm }