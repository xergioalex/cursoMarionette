define(['app',
	'tpl!apps/eventos/show/template/tpl.events.register.layout.tpl',
	'tpl!apps/eventos/show/template/tpl.detalle.template.tpl',
	'tpl!apps/eventos/show/template/tpl.register.template.tpl',
	'entities/evento'], function (EventManager, layoutTpl, detalleTpl, registerTpl) {
	EventManager.module('EventosApp.Show.View', function (View, EventManager, Backbone, Marionette, $, _) {
		View.Layout = Marionette.LayoutView.extend({
			tagName: 'section',
			className: 'section-event-register',
			// template: '#event-register-layout',
			template: layoutTpl,
			regions: {
				eventRegion: '#event-item',
				panelRegister: '#event-register',
			}
		});

		View.Event = Marionette.ItemView.extend({
			tagName: 'section',
			className: 'item-detail',
			// template: '#detalle-template',
			template: detalleTpl,

			events: {
				'click .btn-small': 'atrasEvento',
				'click #item_favorito': 'favoritoEvento',
			},

			atrasEvento: function (e) {
				this.trigger('showList:eventos', this.model);
			},

			favoritoEvento: function () {
				this.trigger('favorito:eventos', this.model);
			}
		});

		View.Register = Marionette.ItemView.extend({
			tagName: 'section',
			className: 'item-registro',
			// template: '#register-template',
			template: registerTpl,

			events: {
				'click #item_register': 'registrarEvento'
			},

			registrarEvento: function (e) {
				e.stopPropagation();

				this.trigger('registrar:evento',
					$('#item-nombre').val(),
					$('#item-apellido').val(),
					$('#item-deni').val(),
					$('#item-telefono').val(),
				);

				$('#item-nombre').val('');
				$('#item-apellido').val('');
				$('#item-dni').val('');
				$('#item-telefono').val('');
			}
		})
	});
	return EventManager.EventosApp.Show.View;
})