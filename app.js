var app = angular.module('ayelet', ['ui.router', 'ui.bootstrap', 'checklist-model', 'angular-uuid']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/one');

    $stateProvider
        .state('one', {
            url: '/one',
            templateUrl: 'js/partials/main.html',
            controller: 'oneController'
        })
        .state('rotenberg', {
            url: '/rotenberg',
            templateUrl: 'js/partials/main.html',
            controller: 'rotenbergController'
        });
}]);

app.filter('capitalized', function() {
    return function(input) {
        return input.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    }
});