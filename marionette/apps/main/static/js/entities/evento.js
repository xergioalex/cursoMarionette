EventManager.module('entities', function (Entities, EventManager, Backbone, Marionette, $, _) {
	EventManager.Evento = Backbone.Model.extend({
		urlRoot: 'api/eventos/',
		defaults: {
			date: '',
			fecha: '',
			dia: '',
			hora: '',
			category: '',
			address: '',
			description: '',
			organizer: '',
			image: ''
		},

		initialize: function () {
			this.on('change:date', this.onFecha, this);
		},

		onFecha: function (model, options) {
			var fecha = new Date(model.get('date'));
			var dia = this.getDia(fecha.getDay());
			model.set({ dia: dia });
			model.set({ hora: fecha.getHours() + ':' + fecha.getMinutes() });
			model.set({ fecha: fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() });
		},

		getDia: function (dia) {
			if (dia === 1) { return "Lunes" }
			if (dia === 2) { return "Martes" }
			if (dia === 3) { return "Miercoles" }
			if (dia === 4) { return "Jueves" }
			if (dia === 5) { return "Viernes" }
			if (dia === 6) { return "Sabado" }
			if (dia === 7) { return "Domingo" }
		}
	});

	EventManager.EventosCollection = Backbone.Collection.extend({
		model: EventManager.Evento,
		url: 'api/eventos/'
	});

	var eventosTodos;

	var API = {
		getEventosEntities: function () {
			// if (eventosTodos === undefined) {
			// 	initializeEventos();
			// }
			eventosTodos = new EventManager.EventosCollection();
			eventosTodos.fetch();

			return eventosTodos;
		},

		getEventoEntity: function (id) {
			var eventModel =  new EventManager.Evento({ id: id });
			eventModel.fetch({ id: id });

			// if (eventosTodos === undefined) {
			// 	initializeEventos();
			// }

			console.log(eventModel);
			return eventModel;
		}
	};

	EventManager.reqres.setHandler('eventos:entities', function () {
		return API.getEventosEntities()
	});

	EventManager.reqres.setHandler('evento:entity', function (id) {
		return API.getEventoEntity(id)
	});

});