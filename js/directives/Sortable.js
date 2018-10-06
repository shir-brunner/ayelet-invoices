angular.module('ros').directive('sortable', function() {
    return function(scope, element, attrs) {
        var $otherList = $('#' + attrs.connectWith);
        var startIndex = -1;
        var startParentId = null;
        var model = null;
        var otherModel = null;

        scope.$watch(attrs.reflects, function(items) {
            model = items;
        }, true);

        scope.$watch($otherList.attr('reflects'), function(items) {
            otherModel = items;
        }, true);

        $(element[0]).sortable({
            revert: true,
            start: function(event, ui) {
                startIndex = $(ui.item).attr('data-model-index');
                startParentId = ui.item[0].parentNode.id;
            },
            update: function(event, ui) {
                if(startIndex != -1)
                {
                    var item = model[startIndex];
                    var $item = $(ui.item);

                    model.splice(startIndex, 1); //remove item from his model

                    if(ui.item[0].parentNode.id == startParentId) //sorted in the current list
                    {
                        model.splice($(ui.item).index(), 0, item); //push him to his new position in the model
                    }
                    else //dragged to another list
                    {
                        otherModel.splice($item.index(), 0, item); //push him to his new position in the other model
                    }

                    $item.remove(); //remove the item from the DOM and let $apply re-render it
                    scope.$apply();
                    scope.onOrderChanged();
                }

                startIndex = -1;
            },
            connectWith: $otherList
        });
    };
});