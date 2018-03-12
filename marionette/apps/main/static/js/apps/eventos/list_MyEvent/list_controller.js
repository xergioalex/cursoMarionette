define(['app', 'apps/eventos/list_MyEvent/list_view'], function (EventManager, View) {
	EventManager.module("EventosApp.ListMy", function( ListMy, EventManager, Backbone, Marionette, $, _) {
		ListMy.Controller = {

			listMyEventos: function () {
				var fetchEventos = EventManager.request("eventos:entities");

				$.when(fetchEventos).done(function(eventos){

					var eventos = eventos.where({name: 'Nombre 1'});

					var filtroEvents = new EventManager.EventosCollection(eventos);

					var eventsListView = new View.EventosView ({
						collection: filtroEvents
					});

					eventsListView.on("childview:evento:showMy", function(childview ,model){
						EventManager.trigger("evento:show", model.get('id'));
					});

					EventManager.mainRegion.show(eventsListView);
				});
			}
		};
	});

	return EventManager.EventosApp.ListMy.Controller;
});