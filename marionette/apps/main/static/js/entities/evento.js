EventManager.module('entities', function (Entities, EventManager, Backbone, Marionette, $, _) {
	EventManager.Evento = Backbone.Model.extend({
		urlRoot: 'api/eventos/',
		activate: false,
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

		// initialize: function () {
		// 	this.on('change:date', this.onFecha, this);
		// },

		// onFecha: function (model, options) {
		// 	var fecha = new Date(model.get('date'));
		// 	var dia = this.getDia(fecha.getDay());
		// 	model.set({ dia: dia });
		// 	model.set({ hora: fecha.getHours() + ':' + fecha.getMinutes() });
		// 	model.set({ fecha: fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() });
		// },

		// getDia: function (dia) {
		// 	if (dia === 1) { return "Lunes" }
		// 	if (dia === 2) { return "Martes" }
		// 	if (dia === 3) { return "Miercoles" }
		// 	if (dia === 4) { return "Jueves" }
		// 	if (dia === 5) { return "Viernes" }
		// 	if (dia === 6) { return "Sabado" }
		// 	if (dia === 7) { return "Domingo" }
		// }
	});

	EventManager.Favorito = Backbone.Model.extend({
		urlRoot: 'api/favoritos/',
	});

	EventManager.FavoritosCollection = Backbone.Collection.extend({
		model: EventManager.Favorito,
		url: 'api/favoritos/'
	});

	EventManager.EventosCollection = Backbone.Collection.extend({
		model: EventManager.Evento,
		url: 'api/eventos/'
	});

	var eventosTodos = false;
	var favoritosTodos = false;

	var API = {
		getEventosEntities: function () {
			var eventosColection = new EventManager.EventosCollection();
			var defer = $.Deferred();

			if (eventosTodos.length) {
				defer.resolve(eventosTodos);
			} else {
				eventosColection.fetch({
					success: function (models) {
						eventosTodos = models;
						defer.resolve(models);
					}
				})
			}

			return defer.promise();
		},

		getEventoEntity: function (id) {
			var eventModel =  new EventManager.Evento({ id: id });
			// eventModel.fetch({ id: id });

			var defer = $.Deferred();

			if (eventosTodos.length) {
				var evento = eventosTodos.get(id);

				if (evento.activate == true) {
					defer.resolve(eventosTodos.get(id));
				} else {
					eventModel.fetch({
						success: function (data) {
							defer.resolve(data);
							evento.set(data);
						}
					});
					evento.activate = true;
				}
			} else {
				eventModel.fetch({
					success: function (data) {
						defer.resolve(data);
					}
				});
			}

			return defer.promise();
		},


		getFavoritosEntities: function () {
			var favoritosColection = new EventManager.FavoritosCollection();
			var defer = $.Deferred();

			if (favoritosTodos.length) {
				defer.resolve(favoritosTodos);
			} else {
				favoritosColection.fetch({
					success: function (models) {
						favoritosTodos = models;
						defer.resolve(models);
					}
				})
			}

			return defer.promise();
		},

	};

	EventManager.reqres.setHandler('eventos:entities', function () {
		return API.getEventosEntities()
	});

	EventManager.reqres.setHandler('favoritos:entities', function () {
		return API.getFavoritosEntities()
	});

	EventManager.reqres.setHandler('evento:entity', function (id) {
		return API.getEventoEntity(id)
	});
});