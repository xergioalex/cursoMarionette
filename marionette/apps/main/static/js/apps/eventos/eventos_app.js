define(['app',
		'apps/eventos/list/list_controller',
		'apps/eventos/list_FavEvent/list_controller',
		'apps/eventos/list_MyEvent/list_controller',
		'apps/eventos/show/show_controller',
	], function (EventManager) {

	EventManager.module('EventosApp', function (EventosApp, EventManager, Backbone, Marionette, $, _) {
		EventosApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'eventos': 'listEventos',
				'eventos/:id': 'showEvento',
				'event-my': 'misEventos',
				'event-fav': 'favEventos',
			}
		});

		var API = {
			listEventos: function () {
				console.log('Entra');
				EventosApp.List.Controller.listEventos();
			},
			showEvento: function (id) {
				EventosApp.Show.Controller.showEvento(id);
			},
			misEventos: function () {
				EventosApp.ListMy.Controller.listMyEventos();
			},
			favEventos: function () {
				EventosApp.ListFav.Controller.listFavEventos();
			}
		}


		EventManager.on('events:list', function () {
			EventManager.navigate('eventos');
			API.listEventos();
		});

		EventManager.on('evento:show', function (id) {
			EventManager.navigate('eventos/' + id);
			API.showEvento(id);
		});

		EventManager.on('evento:listMy', function () {
			EventManager.navigate('event-my/');
			API.misEventos();
		});

		EventManager.on('evento:listFav', function () {
			EventManager.navigate('event-fav/');
			API.favEventos();
		});

		EventManager.addInitializer(function () {
			new EventosApp.Router({
				controller: API
			});
		});
	})

	return EventManager.EventosApp;
});