EventManager.module('entities', function (Entities, EventManager, Backbone, Marionette, $, _) {
	EventManager.Evento = Backbone.Model.extend();

	EventManager.EventosCollection = Backbone.Collection.extend({
		model: EventManager.Evento
	});

	var eventosTodos;

	var initializeEventos = function () {
		eventosTodos = new EventManager.EventosCollection([
			{
				id: 1,
				dia: 'Mon, Jun 15',
				hora: '11:00 AM',
				name: 'Título elemento 1',
				category: 'Marketing',
				direction: 'Colombia'
			},
			{
				'id': 2,
				dia: 'Mon, Jun 15',
				hora: '11:00 AM',
				name: 'Título elemento 2',
				category: 'Marketing',
				direction: 'Colombia'
			},
			{
				'id': 3,
				dia: 'Mon, Jun 15',
				hora: '11:00 AM',
				name: 'Título elemento 3',
				category: 'Marketing',
				direction: 'Colombia'
			},
			{
				'id': 4,
				dia: 'Mon, Jun 15',
				hora: '11:00 AM',
				name: 'Título elemento 4',
				category: 'Marketing',
				direction: 'Colombia'
			},
		])
	}

	var API = {
		getEventosEntities: function () {
			if (eventosTodos === undefined) {
				initializeEventos();
			}

			return eventosTodos;
		}
	};

	EventManager.reqres.setHandler('eventos:entities', function () {
		return API.getEventosEntities()
	});

});