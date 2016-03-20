angular.module('components').component('item', {
    templateUrl: 'scripts/components/item/itemComponent.html',
    bindings: {
        item: '<',
        onDelete: '&'
    }
})

