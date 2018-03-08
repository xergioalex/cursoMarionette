var EventManager = new Marionette.Application();

var regionPrincipal = Marionette.Region.extend({
	el: '#main-region'
});

EventManager.addRegions({
	mainRegion: regionPrincipal
});

EventManager.on('start', function () {
	EventManager.EventosApp.List.Controller.listEventos();
});