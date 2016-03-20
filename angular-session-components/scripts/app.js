var app = angular.module('components', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                    template: '<list items="$resolve.items"></list>',
                    resolve: {
                        items: function () {
                            var items = [
                                {name: 'Item 1'},
                                {name: 'Item 2'},
                                {name: 'Item 3'},
                                {name: 'Item 4'}
                            ]
                            return items
                        }
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);