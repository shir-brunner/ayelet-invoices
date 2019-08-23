angular.module('ayelet').service('rotenbergPaymentService', [function () {
    let paymentService = this;
    let payments = [
        {
            voucherNumber: '123456',
            date: new Date('xxxx-xx-xx'),
            amount: 0.0,
            payments: 1,
            card: '6339'
        },
    ];

    paymentService.getPayments = () => _.sortBy(payments, 'date');
    return paymentService;
}]);