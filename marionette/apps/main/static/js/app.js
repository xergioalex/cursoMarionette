define(['marionette'], function (Marionette) {
	var EventManager = new Marionette.Application();

	var regionPrincipal = Marionette.Region.extend({
		el: '#main-region'
	});

	EventManager.addRegions({
		mainRegion: regionPrincipal,
		headerRegion: '#header-region'
	});

	EventManager.navigate = function (route, options) {
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	EventManager.getCurrentRoute = function () {
		return Backbone.history.fragment
	}

	EventManager.on('start', function () {
		// require(['apps/eventos/eventos_app'], function () {
			if (Backbone.history) {
				Backbone.history.start();

				if (EventManager.getCurrentRoute() === '') {
					EventManager.trigger('events:list');
					// EventManager.trigger('about:show');
				}
			}
		// });
	});

	return EventManager;
})