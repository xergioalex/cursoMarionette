EventManager.module('EventosApp.List', function (List, EventManager, Backbone, Marionette, $, _) {
	List.Controller = {
		listEventos: function () {
			var eventos = EventManager.request('eventos:entities');

			var eventosListView = new List.EventosView({
				collection: eventos
			});

			eventosListView.on('childview:evento:show', function (childView, model) {
				console.log('Registro evento Marionette');
				EventManager.EventosApp.Show.Controller.showEvento(model);
			});

			EventManager.mainRegion.show(eventosListView);
		}
	}
});