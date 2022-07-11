import React, { useEffect, useState } from 'react'

const PollInputs = ({ data, checkHandler, checkState }) => {
	console.log(checkState, data.id)
	const [check, setCheck] = useState()

	useEffect(() => {
		setCheck(checkState === data.id)
	}, [checkState])

	return (
		<>
			<input
				type='radio'
				id={data.title}
				checked={check}
				onChange={checkHandler(data.id)}
			/>
			<label>{data?.title}</label>
		</>
	)
}

export { PollInputs }