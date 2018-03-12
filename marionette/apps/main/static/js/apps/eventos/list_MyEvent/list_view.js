define(['app', 'entities/evento'], function (EventManager) {
	EventManager.module('EventosApp.ListMy.View', function(View, EventManager, Backbone, Marionette, $, _) {
		View.StaticView = Marionette.ItemView.extend({
			tagName: 'article',
			className: 'item-event',
			template: '#static-template',

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