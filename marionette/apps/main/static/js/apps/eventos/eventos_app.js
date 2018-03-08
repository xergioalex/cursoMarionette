EventManager.module('EventosApp', function (EventosApp, EventManager, Backbone, Marionette, $, _) {
	EventosApp.Router = Marionette.AppRouter.extend({
		appRoutes: {
			'eventos': 'listEventos',
			'eventos/:id': 'showEvento'
		}
	});

	var API = {
		listEventos: function () {
			EventosApp.List.Controller.listEventos();
		},
		showEvento: function (id) {
			EventosApp.Show.Controller.showEvento(id);
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

	EventManager.addInitializer(function () {
		new EventosApp.Router({
			controller: API
		});
	});
})