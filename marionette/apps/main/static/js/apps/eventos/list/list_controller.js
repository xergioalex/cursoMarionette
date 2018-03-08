EventManager.module('EventosApp.List', function (List, EventManager, Backbone, Marionette, $, _) {
	List.Controller = {
		listEventos: function () {
			var eventos = EventManager.request('eventos:entities');

			var eventosListView = new List.EventosView({
				collection: eventos
			});

			EventManager.mainRegion.show(eventosListView);
		}
	}
});