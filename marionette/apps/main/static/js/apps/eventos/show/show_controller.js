EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Controller = {
		showEvento: function (model) {
			var eventoView = new Show.Event({
				model: model
			});

			EventManager.mainRegion.show(eventoView);
		}
	};
});