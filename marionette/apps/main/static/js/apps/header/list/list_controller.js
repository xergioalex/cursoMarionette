define(['app', 'apps/header/list/list_view'], function (EventManager, View) {
	EventManager.module('HeaderApp.List', function (List, EventManager, Backbone, Marionette, $, _) {
		List.Controller = {
			listMenu: function () {
				require(['entities/header'], function () {
					var links = EventManager.request('header:entities');

					var headers = new View.Headers({
						collection: links
					});
					EventManager.headerRegion.show(headers);
				});
			}
		};
	});

	return EventManager.HeaderApp.List.Controller;
});