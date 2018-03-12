define(['app'], function (EventManager) {
	EventManager.module('HeaderApp.List.View', function (View, EventManager, Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
			template: '#header-link',
			tagName: 'li'
		});

		View.Headers = Marionette.CompositeView.extend({
			template: '#header-template',
			className: 'navbar navbar-inverse navbar-fixed-top',
			childView: View.Header,
			childViewContainer: '#items-list',
		});
	});

	return EventManager.HeaderApp.List.View;
});