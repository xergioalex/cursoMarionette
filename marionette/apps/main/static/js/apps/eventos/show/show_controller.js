EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Controller = {
		showEvento: function (id) {
			var evento = EventManager.request('evento:entity', id);
			var eventoView = new Show.Event({
				model: evento
			});

			eventoView.on('showList:eventos', function (model) {
				EventManager.trigger('events:list');
			});

			eventoView.on('change:atributo', function (model) {
				eventoView.render()
			});

			EventManager.mainRegion.show(eventoView);
		}
	};
});