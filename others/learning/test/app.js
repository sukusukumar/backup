(function () {
	var app = new wine();
	app.setConfig('route', {
		default: {
			uri: 'test/(:1)',
			module: 'testModule',
			controller: function () {alert('hai');},
			view: 'hello'
		}
	})
}) ();