import React, { useEffect, useState } from 'react'

import cls from '../../../ProfilePage/Components/ProfileForm/ProfileForm.module.scss'


const SelectCity = ({ cities, onFilter }) => {
	const [currentCity, setCurrentCity] = useState()

	useEffect(() => {
		onFilter(currentCity)
	}, [currentCity])

	return (
		<div className={cls.formItem}>
			<label>Город</label>
			<select
				placeholder='Выберите город'
				defaultValue='Все города'
				value={currentCity}
				onChange={(e) => setCurrentCity(e.target.value)}
			>
				<option value='Все города'>Все города</option>
				{cities.map((i, idx) => {
					return (
						<option value={i} key={idx * Math.random()}>
							{i}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export { SelectCity }