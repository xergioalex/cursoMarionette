define(['app'], function (EventManager) {
	EventManager.module('AboutApp.Show.View', function (View, EventManager, Backbone, Marionette, $, _) {
		View.About = Marionette.ItemView.extend({
			tagName: 'section',
			className: 'section-event-register',
			template: '#about-template'
		});
	});

	return EventManager.AboutApp.Show.View;
});