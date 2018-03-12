EventManager.module("EventosApp.ListFav", function( ListFav, EventManager, Backbone, Marionette, $, _) {
	console.log('Entra');
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
							// console.log(evento.id + ' === '+ favorito.id);
							// console.log(favorito);
							if (evento.id == favorito.id) {
								console.log('Entra');
								filtroEvents.add(evento);
							}
						});
					});

					var eventsListFavView = new ListFav.EventosView ({
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