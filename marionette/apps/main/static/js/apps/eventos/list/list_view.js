define(['app',
		'tpl!apps/eventos/list/template/tpl.static.template.tpl',
		'entities/evento'], function (EventManager, staticTemplateTpl) {

	EventManager.module('EventosApp.List.View', function(View, EventManager, Backbone, Marionette, $, _) {
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
				this.trigger('evento:show', this.model);
			}
		});

		// View.EventosView = Marionette.CompositeView.extend({
		// 	tagName: 'section',
		// 	template: '#eventView-template',
		// 	childView: View.StaticView,
		// 	childViewContainer: '.container-events',
		// 	attachHtml: function (collectionView, childView, index) {
		// 		collectionView.$el.prepend(childView.el);
		// 	}
		// })

		View.EventosView = Marionette.CollectionView.extend({
			tagName: 'section',
			className: 'container-events',
			childView: View.StaticView,
			attachHtml: function (collectionView, childView, index) {
				collectionView.$el.prepend(childView.el);
			}
		});
	})

	return EventManager.EventosApp.List.View;
})