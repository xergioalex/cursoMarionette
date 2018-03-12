define(['app',
	'tpl!apps/eventos/list_MyEvent/template/tpl.static.template.tpl',
	'entities/evento'], function (EventManager, staticTemplateTpl) {
	EventManager.module('EventosApp.ListMy.View', function(View, EventManager, Backbone, Marionette, $, _) {
		View.StaticView = Marionette.ItemView.extend({
			tagName: 'article',
			className: 'item-event',
			// template: '#static-template',
			template: staticTemplateTpl,

			events: {
				'click #item-name': 'detalleEvento'
			},

			detalleEvento: function (e) {
				e.stopPropagation();
				this.trigger('evento:showMy', this.model);
			}
		});

		View.EventosView = Marionette.CollectionView.extend({
			tagName: 'section',
			className: 'container-events',
			childView: View.StaticView,
			attachHtml: function (collectionView, childView, index) {
				collectionView.$el.prepend(childView.el);
			}
		});
	})

	return EventManager.EventosApp.ListMy.View;
})