EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Layout = Marionette.LayoutView.extend({
		tagName: 'section',
		className: 'section-event-register',
		template: '#event-register-layout',
		regions: {
			eventRegion: '#event-item',
			panelRegister: '#event-register',
		}
	});

	Show.Event = Marionette.ItemView.extend({
		tagName: 'section',
		className: 'item-detail',
		template: '#detalle-template',

		events: {
			'click .btn-small': 'atrasEvento'
		},

		atrasEvento: function (e) {
			this.trigger('showList:eventos', this.model);
		},
	});

	Show.Register = Marionette.ItemView.extend({
		tagName: 'section',
		className: 'item-registro',
		template: '#register-template'
	})
});