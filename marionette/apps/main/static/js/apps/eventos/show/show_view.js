EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Event = Marionette.ItemView.extend({
		tagName: 'section',
		className: 'item-detail',
		template: '#detalle-template',

		events: {
			'click .btn-small': 'atrasEvento'
		},

		modelEvents: {
			'change': 'cambioAtributte'
		},

		atrasEvento: function (e) {
			this.trigger('showList:eventos', this.model);
		},

		cambioAtributte: function (model, options) {
			this.trigger('change:atributo', model);
		}
	});
});