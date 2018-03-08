EventManager.module('EventosApp.List', function(List, EventManager, Backbone, Marionette, $, _) {
	List.StaticView = Marionette.ItemView.extend({
		tagName: 'article',
		className: 'item-event',
		template: '#static-template',
	});

	List.EventosView = Marionette.CollectionView.extend({
		tagName: 'section',
		className: 'container-events',
		childView: List.StaticView,
		attachHtml: function (collectionView, childView, index) {
			collectionView.$el.prepend(childView.el);
		}
	});
})