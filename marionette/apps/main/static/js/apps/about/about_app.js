EventManager.module('AboutApp', function (AboutApp, EventManager, Backbone, Marionette, $, _) {
	console.log('Entraaa');
	AboutApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			'about': 'showAbout'
		}
	});

	var API = {
		showAbout: function () {
			console.log('Entra');
			AboutApp.Show.Controller.showAbout();
		}
	};

	EventManager.on('about:show', function () {
		EventManager.navigate('about');

		API.showAbout();
	});

	EventManager.addInitializer(function () {
		new AboutApp.Router({
			controller: API
		});
	});
});