var EventManager = new Marionette.Application();

var regionPrincipal = Marionette.Region.extend({
	el: '#main-region'
});

EventManager.addRegions({
	mainRegion: regionPrincipal
});

EventManager.navigate = function (route, options) {
	options || (options = {});
	Backbone.history.navigate(route, options);
};

EventManager.getCurrentRoute = function () {
	return Backbone.history.fragment
}

EventManager.on('start', function () {
	if (Backbone.history) {
		Backbone.history.start();

		if (this.getCurrentRoute() === '') {
			EventManager.trigger('about:show');
		}
	}
});