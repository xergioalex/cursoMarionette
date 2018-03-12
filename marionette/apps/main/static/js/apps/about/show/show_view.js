define(['app', 'tpl!apps/about/show/template/tpl.about.template.tpl'], function (EventManager, aboutTpl) {
	EventManager.module('AboutApp.Show.View', function (View, EventManager, Backbone, Marionette, $, _) {
		View.About = Marionette.ItemView.extend({
			tagName: 'section',
			className: 'section-event-register',
			// template: '#about-template'
			template: aboutTpl
		});
	});

	return EventManager.AboutApp.Show.View;
});