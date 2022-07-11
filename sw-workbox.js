importScripts('workbox-v4.3.0/workbox-sw.js')

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
	modulePathPrefix: 'workbox-v4.3.0/'
})

// Turn on logging
workbox.setConfig({
	debug: true
})

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
	{
		revision: 'a64e723cd5059c275f0ebe4cf360f97b',
		url: 'img/adsImg.png'
	},
	{
		revision: 'b84e7eacb11f8a3d70d11ad235d05f55',
		url: 'img/background.png'
	},
	{
		revision: '5d7b454ac5bb80e8821f4cf774c3b6d1',
		url: 'img/bgBronze.png'
	},
	{
		revision: 'bdab4c29c56cdc5d696de3f58c190160',
		url: 'img/bgGold.png'
	},
	{
		revision: 'afd0cc482185393cc5f390292fcfc779',
		url: 'img/bgPlatinum.png'
	},
	{
		revision: '77af6c20b3b28008408f978911443449',
		url: 'img/bgSilver.png'
	},
	{
		revision: '2136eccefeb62ed6a388512efece0903',
		url: 'img/bgVip.png'
	},
	{
		revision: '8f8fcb204308822e387186cef4d9b3b7',
		url: 'img/catalog-icon.png'
	},
	{
		revision: '4438e7f43ea7249f09c876f7936dcdb7',
		url: 'img/Ellipse 117.png'
	},
	{
		revision: '8c83252b8ec5b62981d98bbc9883637e',
		url: 'img/home-icon.png'
	},
	{
		revision: '04642239940f52167ddd497cb7404515',
		url: 'img/logo_footer.png'
	},
	{
		revision: '03a13b9af2dcc82e8dd32615dd30b570',
		url: 'img/logo.png'
	},
	{
		revision: '9d083f09a96a30e9e6313f0dd510bd55',
		url: 'img/managerBg.png'
	},
	{
		revision: 'f2876dfc4e6449a1f13c9ae6ddc086dd',
		url: 'img/messeger-icon.png'
	},
	{
		revision: '132936313ca3b4efb318486ddff04c17',
		url: 'img/placeholderAvatar.png'
	},
	{
		revision: '24e11ac896aadbc9a1fca49f76f2c3f2',
		url: 'img/profile-icon.png'
	},
	{
		revision: '7506bb8bf34ab99ee67d3e5df81d02c1',
		url: 'img/qrcode-icon.png'
	},
	{
		revision: 'b4ea00c8b499eef1369ec4ec34e8b4ff',
		url: 'img/qrcode.png'
	},
	{
		revision: 'efd549e1a9d80834cade5bdb78057e3e',
		url: 'img/trc.png'
	},
	{
		revision: '3a8a058185b9bfbdfd70529acbbed305',
		url: 'img/userImage.png'
	},
	{
		revision: '28fc63489c8ee5ea5db3b17ee1708970',
		url: 'img/write-svgrepo-com 1.png'
	},
	{
		revision: '03a13b9af2dcc82e8dd32615dd30b570',
		url: 'img/Логотип LOGO.png'
	},
	{
		revision: '8444ba656f464ed6458f4d153e51dcd5',
		url: 'img/arrowBack.svg'
	},
	{
		revision: '0c5d540bee1791d8856bfc9f6f01bbf6',
		url: 'img/catalog-icon.svg'
	},
	{
		revision: 'c13a103ca688dfbda932367956bf0227',
		url: 'img/catalog-tc.svg'
	},
	{
		revision: '56cb7687a5693785ab242d064dab66fe',
		url: 'img/cross.svg'
	},
	{
		revision: '1009c93a8f85f7d076b12205e81d625c',
		url: 'img/home-icon.svg'
	},
	{
		revision: '95981adaf2acdc1c902a5e832550c8c2',
		url: 'img/messanger.svg'
	},
	{
		revision: '0360925dce35786357bb7af76c829dc6',
		url: 'img/messeger-icon.svg'
	},
	{
		revision: '2f5096518c45e71448d2b3b5309b31ba',
		url: 'img/profile-icon.svg'
	},
	{
		revision: '3854637ee23ef89eb2d91ff1209ca10d',
		url: 'img/qrcode-icon.svg'
	},
	{
		revision: '731fe54fbb691cb7ec27b5e7eca134ae',
		url: 'img/qrcode.svg'
	},
	{
		revision: 'be58a9867b2c177d8701468e427fdb2a',
		url: 'img/write-svgrepo-com 1.svg'
	},
	{ revision: '708f8b8dd4a12c2274c1b1c824834623', url: 'img/иконка 39.svg' }
])
