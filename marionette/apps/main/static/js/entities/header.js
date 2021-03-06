define(['app', 'backbone.picky'], function (EventManager) {
	EventManager.module('Entities', function (Entities, EventManager, Backbone, Marionette, $, _) {
		Entities.Header = Backbone.Model.extend({
			initialize: function () {
				var selectable = new Backbone.Picky.Selectable(this);
				_.extend(this, selectable);
			},
			defaults: {
				name: '',
				url: '',
			},
		});

		Entities.HeaderCollection = Backbone.Collection.extend({
			model: Entities.Header,
			initialize: function () {
				var singleSelect = new Backbone.Picky.SingleSelect(this);

				_.extend(this, singleSelect);
			}
		});

		var initializeHeader = function () {
			Entities.headers = new Entities.HeaderCollection([
				{ name: 'Eventos', url: 'eventos' },
				{ name: 'MyEvents', url: 'event-my' },
				{ name: 'Eventos Favoritos', url: 'event-fav' },
				{ name: 'About', url: 'about' },
			]);
		}

		var API = {
			getHeader: function () {
				if (Entities.headers === undefined) {
					initializeHeader();
				}
				return Entities.headers;
			}
		}

		EventManager.reqres.setHandler('header:entities', function () {
			return API.getHeader();
		});
	});

	return;
})