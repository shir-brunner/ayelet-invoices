angular.module('ros').directive('droppable', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var $droppable = $(element[0]).droppable({
                accepts: attrs.accepts,
                drop: function(event, ui) {
                    scope.onDrop($(ui.draggable).attr('data-model-id'));
                }
            });
        }
    }
});