import React from 'react'
import { useForm } from 'react-hook-form'
import { TiWarning } from 'react-icons/ti'

import { emailReg } from '../../../data/regexp'
import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const ResetPasswordForm = ({ handler }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'all' })

	return (
		<>
			<p>
				Мы отправим на Вашу почту, указанную при регистрации, код подтверждения
			</p>
			<form onSubmit={handleSubmit(handler)}>
				<div className={cls.formItem}>
					<label>E-mail</label>
					<input
						required
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
				<button disabled={!!errors.email} type='submit' className={cls.btn}>
					Получить код подтверждения
				</button>
			</form>
		</>
	)
}

export { ResetPasswordForm }