import React from 'react'

import cn from 'classnames'

const Loader = ({ transparent = true, onlyLoader = false }) => {
	if (onlyLoader) {
		return (
			<div className='cssload-thecube'>
				<div className='cssload-cube cssload-c1'></div>
				<div className='cssload-cube cssload-c2'></div>
				<div className='cssload-cube cssload-c4'></div>
				<div className='cssload-cube cssload-c3'></div>
			</div>
		)
	}

	return (
		<div
			className={cn(
				'loader-wrap',
				transparent ? 'transparent-loader' : 'filled-loader'
			)}
		>
			<div className='cssload-thecube'>
				<div className='cssload-cube cssload-c1'></div>
				<div className='cssload-cube cssload-c2'></div>
				<div className='cssload-cube cssload-c4'></div>
				<div className='cssload-cube cssload-c3'></div>
			</div>
		</div>
	)
}

export { Loader }