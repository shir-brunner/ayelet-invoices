var app = angular.module('ayelet', ['ui.router', 'ui.bootstrap', 'checklist-model', 'angular-uuid']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'js/partials/main.html',
            controller: 'mainController'
        });
}]);

app.filter('capitalized', function() {
    return function(input) {
        return input.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    }
});