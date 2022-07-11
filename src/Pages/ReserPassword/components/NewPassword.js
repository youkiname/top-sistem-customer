import React from 'react'
import { useForm } from 'react-hook-form'
import { TiWarning } from 'react-icons/ti'

import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const NewPassword = ({ handler }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch
	} = useForm({ mode: 'all' })
	return (
		<form onSubmit={handleSubmit(handler)}>
			<div className={cls.formItem}>
				<label>Пароль</label>
				<input
					required
					placeholder='********'
					type='password'
					{...register('newPass', {
						minLength: {
							value: 8,
							message: 'Пароль не должен быть менее 8  символов'
						},
						required: true
					})}
				/>
				<div className={cls.errMsg}>
					{errors?.newPass && (
						<span>
							<TiWarning />
							{errors?.newPass?.message || 'Введите корректное значение'}
						</span>
					)}
				</div>
			</div>
			<div className={cls.formItem}>
				<label>Повторите пароль</label>
				<input
					required
					placeholder='********'
					type='password'
					{...register('confirmPassword', {
						validate: (val) => {
							if (watch('newPass') !== val) {
								return 'Пароли не совпадают'
							}
						}
					})}
				/>
				<div className={cls.errMsg}>
					{errors?.confirmPassword && (
						<span>
							<TiWarning />
							{errors?.confirmPassword?.message ||
								'Введите корректное значение'}
						</span>
					)}
				</div>
			</div>
			<button
				disabled={!!errors?.newPass || !!errors?.confirmPassword}
				className={cls.btn}
			>
				Изменить пароль
			</button>
		</form>
	)
}

export { NewPassword }