angular.module('ros').directive('draggable', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element[0]).draggable({
                helper: 'clone',
                revert: 'invalid',
                cancel: '.expanded'
            });
        }
    };
});