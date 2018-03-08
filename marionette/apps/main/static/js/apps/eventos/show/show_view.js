EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Event = Marionette.ItemView.extend({
		tagName: 'section',
		className: 'item-detail',
		template: '#detalle-template'
	});
});