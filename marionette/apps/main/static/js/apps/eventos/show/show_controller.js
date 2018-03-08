EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Controller = {
		showEvento: function (id) {
			var eventos = EventManager.request('eventos:entities');
			var model = eventos.get(id);
			var eventoView = new Show.Event({
				model: model
			});

			eventoView.on('showList:eventos', function (model) {
				EventManager.trigger('events:list');
			});

			EventManager.mainRegion.show(eventoView);
		}
	};
});