angular.module('ayelet').service('rotenbergOrderService', [function() {
    let orderService = this;
    let orders = [
        {
            number: 'xx/xxxxxx',
            date: new Date('xxxx-xx-xx xx:xx:xx'),
            items: [
                { desc: 'xxxxxxxxxxxxxxxxx', quantity: 1, pricePerUnit: 7860 },
            ],
            totalAmount: 0.0,
            image: 'order1',
            signed: true
        }
    ];

    orderService.getOrders = term => {
        return _.sortBy(orders, 'date').filter(order => {
            if(!term) return true;

            return _.some(order.items, item => item.desc.indexOf(term) !== -1);
        });
    };

    return orderService;
}]);