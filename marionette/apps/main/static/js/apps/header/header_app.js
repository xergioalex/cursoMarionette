define(['app', 'apps/header/list/list_controller'], function (EventManager) {
	EventManager.module('HeaderApp', function (HeaderApp, EventManager, Backbone, Marionette, $, _) {
		var API = {
			listHeader: function () {
				HeaderApp.List.Controller.listMenu();
			}
		};

		EventManager.commands.setHandler('set:activate:header', function (name) {
			console.log('Entra');
			EventManager.HeaderApp.List.Controller.setActivateHeader(name);
		});

		HeaderApp.on('start', function () {
			API.listHeader();
		});
	});

	return EventManager.HeaderApp;
})