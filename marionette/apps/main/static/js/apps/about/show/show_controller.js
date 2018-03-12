define(['app', 'apps/about/show/show_view'], function (EventManager, View) {
	EventManager.module('AboutApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
		Show.Controller = {
			showAbout: function () {
				var view = new View.About();
				EventManager.mainRegion.show(view);
			}
		}
	});

	return EventManager.AboutApp.Show.Controller;
});