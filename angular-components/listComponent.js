'use strict'

function ListController () {
	var self = this

	self.items = [
		{name: 'Item 1'},
		{name: 'Item 2'}
	]

	self.delete = function(item) {
		var index = self.items.indexOf(item)
		self.items.splice(index, 1)
	}
}

angular.module('listApp').component('list', {
	templateUrl: 'list.html',
	controller: ListController
})