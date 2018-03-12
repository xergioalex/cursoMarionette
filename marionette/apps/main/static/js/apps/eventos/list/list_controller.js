define(['app', 'apps/eventos/list/list_view'], function (EventManager, View) {
	EventManager.module('EventosApp.List', function (List, EventManager, Backbone, Marionette, $, _) {
		List.Controller = {
			listEventos: function () {
				var fetchEventos = EventManager.request('eventos:entities');

				$.when(fetchEventos).done(function (eventos) {
					var eventosListView = new View.EventosView({
						collection: eventos
					});

					eventosListView.on('childview:evento:show', function (childView, model) {
						// console.log('Registro evento Marionette');
						EventManager.trigger('evento:show', model.get('id'));
					});


					EventManager.mainRegion.show(eventosListView);
				})

			}
		}
	});

	return EventManager.EventosApp.List.Controller;
});