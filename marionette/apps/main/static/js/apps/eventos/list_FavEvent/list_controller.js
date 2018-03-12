define(['app', 'apps/eventos/list_FavEvent/list_view'], function (EventManager, View) {
	EventManager.module("EventosApp.ListFav", function( ListFav, EventManager, Backbone, Marionette, $, _) {
		ListFav.Controller = {

			listFavEventos: function () {
				var fetchEventos = EventManager.request("eventos:entities");
				var fetchFavoritos = EventManager.request("favoritos:entities");

				$.when(fetchEventos).done(function(eventos){
					$.when(fetchFavoritos).done(function(favoritos){
						var eventosFav = favoritos.where();

						var filtroEvents = new EventManager.EventosCollection();

						eventos.forEach(function (evento) {
							eventosFav.forEach(function (favorito) {
								if (evento.id == favorito.id) {
									filtroEvents.add(evento);
								}
							});
						});

						var eventsListFavView = new View.EventosView ({
							collection: filtroEvents
						});

						eventsListFavView.on("childview:evento:showFav", function(childview ,model){
							EventManager.trigger("evento:show", model.get('id'));
						});

						EventManager.mainRegion.show(eventsListFavView);
					});
				});
			}
		};
	});

	return EventManager.EventosApp.ListFav.Controller;
});