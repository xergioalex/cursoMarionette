Complemento a BackboneJs
---


Instalar Django
---
pip install django==1.5
pip install djangorestframework==2.3.14
pip install drf-nested-routers
pip install pillow
---



Regiones en Marionette
---

Permiten seleccionar un aparte del DOM, establecer un nombre para con el cual, poder mostrar las vistas que son (Itemview, Collectionview, compositeview), siendo renderizado nuestra aplicación.

El lugar donde se representa una region puede ser: un id, className o nombre de etiqueta.


RegionManagers: Se puede agregar a la instancias de aplicación


Eventos de region:

https://marionettejs.com/docs/v2.4.3/marionette.region.html

```
var EventManager = new Marionette.Application();

var regionPrincipal = Marionette.Region.extend({
	el: '#main-region'

});

EventManager.addRegions({
	mainRegion: regionPrincipal
	// mainRegion: '#main-region'
});

EventManager.StaticView = Marionette.ItemView.extend({
	tagName: 'article',
	className: 'miClase',
	id: 'miId',
	template: '#static-template'
});

EventManager.on('start', function () {
	var staticView = new EventManager.StaticView();

	EventManager.mainRegion.on('before:show', function(view, region, options) {
		console.log('Antes de mostrar vista');
	});

	EventManager.mainRegion.on('show', function(view, region, options) {
		console.log('Se mostro la vista');
	});

	EventManager.mainRegion.on('before:swap', function(view, region, options) {
		console.log('Antes de swap de vista');
	});


	EventManager.mainRegion.show(staticView);
	// console.log('Curso Marionette');
})

EventManager.start();
```

```
var regionPrincipal = Marionette.Region.extend({
	el: '#main-region',
	onBeforeShow: function(view, region, options) {
		console.log('Antes de mostrar vista');
	},
	onShow: function(view, region, options) {
		console.log('Se mostro la vista');
	},
	onBeforeSwap: function(view, region, options) {
		console.log('Antes de swap de vista');
	}
});
```



ItemView
---

Ees una vista que representa un solo elemento. Ese elemento puede ser un Backbone.Model o pueder ser un Backbone.Collection.

La clase Marionette.View no está destinada a ser utilizada directamente. Existe como una vista base para otras clases de vista para extenderse desde esta, y para proporcionar una ubicación común para comportamientos que se desarrollen en todas las vistas.

Plantilas
* Son básicamente HTML
* Establecen como deben mostrarse las cosas (lo que HTML debe mostrar en las o la vista, los estilos CSS, donde se deben mostrar los datos, etc.)


```
EventManager.StaticView = Marionette.ItemView.extend({
	tagName: 'article',
	className: 'item-event',
	template: '#static-template'
});

EventManager.on('start', function () {
	var eventModel = new EventManager.Evento({
		name: 'Curso Marionette',
		category: 'Marketing',
		direction: 'Colombia'
	});

	var staticView = new EventManager.StaticView({
		model: eventModel
	});

	EventManager.mainRegion.show(staticView);
	// console.log('Curso Marionette');
});
```


Eventos con ITEM VIEW
---


```
EventManager.StaticView = Marionette.ItemView.extend({
	tagName: 'article',
	className: 'item-event',
	template: '#static-template',
	events: {
		'click #item-name': 'mostrarName'
	},

	modelEvents: {
		'change': 'cambiarAtribute'
	},

	mostrarName: function (e) {
		this.model.set({ name: 'Curso Javascript' });
		// alert(this.model.escape('name'));
		// console.log();
	},

	cambiarAtribute: function (model) {
		this.trigger('evento:show', model);
	},

	onBeforeRender: function () {
		console.log('On before render');
	},

	onRender: function () {
		console.log('On render');
	},
});


var staticView = new EventManager.StaticView({
	model: eventModel,
});

staticView.on('evento:show', function (model) {
	staticView.render();
});
```

Eventos:
- onBeforeRender
- onRender
- onBeforeDestroy
- onDestroy



Selector de elementos del DOM
---

EventManager.StaticView = Marionette.ItemView.extend({
	ui: {
		contenido: '#item-name'
	},
})




CollectionView
---

* Es una vista que representa un conjunto de modelos, que estan unidos dentro de una colección.
* Una colección está comprendido por un conjunto de modelos, los cuales pertenecen a la misma instancia u otra. Está colección extiende de un Backbone Collection.
* Por defecto, el CollectionView mantendrá la orden de una colección ordenada en el DOM. CollectionView extiende directamente desde Marionette.View.
* Para un collectionView es necesario especificar un childView al definir una vista de colección. Esto debe ser una definición Backbon.Collection class, no una instancia.
* Se debe especificar una región donde deberá ser mostrada este collectionView será en una parte del DOM, indicado dentro de addRegions.


Métodos sobre un collection View
---

Hay varios métodos de devolución de llamada que se pueden proporcionar en un colectionViw

- onBeforeRender: Método de llamada justo antes de que se muestre toda la colección de vista.
- onBeforeDestroy: Se ejecuta cunado la vista es destruida
- onBeforeAddChild


con attachHtml se puede manimpular como los elementos se van agregando



Modulos Marionette
---



Composite View
----

Extiende desde CollectionView.


Se utiliza como una vista compuesta para escenarios donde debe representar tanto un collectionview e itemview en una estructura del DOM, o para escenarios donde una colección tiene qu eser dictada dentro de una plantill envoltoria.


Composite Model template
---



Utilizado como una vista compuesta para escenarios donde debe representar tanto un collection view e item view en una estructura del DOM. O para escenarios donde una plantilla de envoltura. Por defect, el compositeview antendrá la orden de una colección ordenada en el DOM.

```
<script type="text/template">
	<div>
		<h1 class="item-title-event">Eventos</h1>
	</div>
	<section class="container-events"></section>
</script>
```





