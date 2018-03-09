EventManager.module('EventosApp.Show', function (Show, EventManager, Backbone, Marionette, $, _) {
	Show.Controller = {
		showEvento: function (id) {
			var fetchEvento = EventManager.request('evento:entity', id);

			$.when(fetchEvento).done(function (evento) {
				var fecha = new Date(evento.get('date'));
				var dia = EventManager.EventosApp.Show.Controller.getDia(fecha.getDay());
				evento.set({ dia: dia });
				evento.set({ hora: fecha.getHours() + ':' + fecha.getMinutes() });
				evento.set({ fecha: fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() });

				var eventoView = new Show.Event({
					model: evento
				});

				eventoView.on('showList:eventos', function (model) {
					EventManager.trigger('events:list');
				});

				// eventoView.on('change:atributo', function (model) {
				// 	eventoView.render()
				// });
				EventManager.mainRegion.show(eventoView);
			});


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
	};
});