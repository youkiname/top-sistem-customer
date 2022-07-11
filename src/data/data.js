import React from 'react'

import bronzeBg from '../img/bgBronze.png'
import goldBg from '../img/bgGold.png'
import platinumBg from '../img/bgPlatinum.png'
import silverBg from '../img/bgSilver.png'
import vipBg from '../img/bgVip.png'
import managerBg from '../img/managerBg.png'


export const gradients = [
	'linear-gradient(134.82deg, #D9F3B6 2.78%, #FFFACB 100%)',
	'linear-gradient(134.82deg, #F4E7B8 2.78%, #FFF6CA 100%)',
	'linear-gradient(134.82deg, #B7F4F4 2.78%, #CBEAFF 100%)',
	'linear-gradient(134.82deg, #F3B7F4 2.78%, #F2CAFF 100%)',
	'linear-gradient(134.82deg, #EDCECE 2.78%, #FFF2CB 100%)'
]

export const levelCardColor = {
	bronze: '#BD611F',
	silver: '#6B6968',
	gold: '#C08F0F',
	platinum: '#B6B6B6',
	vip: '#000000'
}

export const backgrounds = [
	{ status: 'bronze', asset: bronzeBg },
	{ status: 'silver', asset: silverBg },
	{ status: 'gold', asset: goldBg },
	{ status: 'platinum', asset: platinumBg },
	{ status: 'vip', asset: vipBg },
	{ status: 'manager', asset: managerBg }
]

export const gradientsStatus = [
	{
		status: 'bronze',
		asset:
			'linear-gradient(139.07deg, #832A00 15.05%, #643700 54.46%, #A24900 89.44%)'
	},
	{
		status: 'silver',
		asset:
			'linear-gradient(139.07deg, #918F8B 15.05%, #575554 54.46%, #9F9D9D 92.26%)'
	},
	{
		status: 'gold',
		asset:
			'linear-gradient(139.07deg, #918F8B 15.05%, #575554 54.46%, #9F9D9D 92.26%)'
	},
	{
		status: 'platinum',
		asset:
			'linear-gradient(139.07deg, #E3C559 15.05%, #C08F0F 54.46%, #E5BE30 92.26%)'
	},
	{
		status: 'vip',
		asset:
			'linear-gradient(139.07deg, #151010 15.05%, #373633 54.46%, #212121 92.26%)'
	},
	{
		status: 'manager',
		asset:
			'linear-gradient(139.07deg, #408DD5 15.05%, #0F41C0 54.46%, #147BDB 92.26%)'
	}
]