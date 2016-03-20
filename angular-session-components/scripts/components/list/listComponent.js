function ListController() {
    var ctrl = this

    ctrl.items = []

    ctrl.delete = function (item) {
        var index = ctrl.items.indexOf(item)
        ctrl.items.splice(index, 1)
    }
}

angular.module('components').component('list', {
        templateUrl: 'scripts/components/list/listComponent.html',
        controller: ListController,
        bindings: {
            items: '<'
        }
    }
)
