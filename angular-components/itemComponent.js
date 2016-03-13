'use strict'

angular.module('listApp').component('item', {
	templateUrl: 'item.html',
	bindings: {
		item: '<',
		onDelete: '&'
	}
})