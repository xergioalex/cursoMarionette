requirejs.config({
	baseUrl: 'static/js',
	paths: {
		jquery: 'vendor/jquery',
		json2: 'vendor/json2',
		backbone: 'vendor/backbone',
		marionette: 'vendor/backbone.marionette',
		'backbone.picky': 'vendor/backbone.picky',
		underscore: 'vendor/underscore',
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore', 'json2'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		},
		'backbone.picky': ['backbone']
	}
});

require(['app', 'apps/header/header_app', 'apps/about/about_app', 'apps/eventos/eventos_app'], function (EventManager) {
	console.log('Hello');
	EventManager.start();
})