define(['app',
	'tpl!apps/header/list/template/tpl.header.link.tpl',
	'tpl!apps/header/list/template/tpl.header.template.tpl',], function (EventManager, linkTpl, headerTpl) {
	EventManager.module('HeaderApp.List.View', function (View, EventManager, Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
			// template: '#header-link',
			template: linkTpl,
			tagName: 'li'
		});

		View.Headers = Marionette.CompositeView.extend({
			// template: '#header-template',
			template: headerTpl,
			className: 'navbar navbar-inverse navbar-fixed-top',
			childView: View.Header,
			childViewContainer: '#items-list',
		});
	});

	return EventManager.HeaderApp.List.View;
});