EventManager.module('EventosApp.List', function (List, EventManager, Backbone, Marionette, $, _) {
	List.Controller = {
		listEventos: function () {
			var eventos = EventManager.request('eventos:entities');

			var eventosListView = new List.EventosView({
				collection: eventos
			});

			eventosListView.on('childview:evento:show', function (childView, model) {
				console.log('Registro evento Marionette');
				EventManager.trigger('evento:show', model.get('id'));
			});


			EventManager.mainRegion.show(eventosListView);
		}
	}
});