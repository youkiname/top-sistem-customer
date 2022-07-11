const { injectManifest } = require('workbox-build')

let workboxConfig = {
	swSrc: 'src/sw-workbox-template.js',
	swDest: 'build/sw-workbox.js',
	globDirectory: 'build',
	globPatterns: [
		'icon-192x192.png',
		'icon-256x256.png',
		'icon-384x384.png',
		'icon-512x512.png'
	]
}

injectManifest(workboxConfig)
	.then((resources) => {
		console.log(
			`Injected ${resources.count} resources for precaching, ` +
				`totaling ${resources.size} bytes.`
		)
	})
	.catch((err) => {
		console.log('Uh oh 😬', err)
	})
