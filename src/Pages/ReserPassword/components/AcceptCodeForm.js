import React from 'react'
import { useForm } from 'react-hook-form'
import { TiWarning } from 'react-icons/ti'

import cls from '../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const AcceptCodeForm = ({ handler, email }) => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm({ mode: 'all' })

	return (
		<>
			<p>
				Мы отправили на почту {email || ''} код подтверждения. Введите его в
				поле ниже, чтобы создать новый пароль
			</p>
			<form onSubmit={handleSubmit(handler)}>
				<div className={cls.formItem}>
					<input
						className={cls.acceptCodeInput}
						placeholder='*****'
						{...register('acceptCode', {
							required: 'Введите код подтверждения',
							minLength: { value: 5, message: 'Введите корректный код' },
							maxLength: { value: 5, message: 'Введите корректный код' }
						})}
					/>
				</div>
				<div className={cls.errMsg}>
					{errors?.acceptCode && (
						<span>
							<TiWarning />
							{errors?.acceptCode?.message || 'Введите корректное значение'}
						</span>
					)}
				</div>
				<button type='submit' className={cls.btn}>
					Отправить код подтверждения
				</button>
			</form>
		</>
	)
}

export { AcceptCodeForm }