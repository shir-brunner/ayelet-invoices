angular.module('ayelet').service('paymentService', [function () {
    let paymentService = this;
    let payments = [
        {
            voucherNumber: '0004126',
            date: new Date('2018-09-02'),
            amount: 8564.40,
            payments: 4,
            denied: true
        },
        {
            voucherNumber: '0004127',
            date: new Date('2018-09-02'),
            amount: 6320.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004162',
            date: new Date('2018-09-16'),
            amount: 2110.83,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004128',
            date: new Date('2018-09-02'),
            amount: 2945.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004131',
            date: new Date('2018-09-02'),
            amount: 3240.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004130',
            date: new Date('2018-09-02'),
            amount: 2149.80,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004129',
            date: new Date('2018-09-02'),
            amount: 5733.36,
            payments: 2,
            denied: true
        },
        {
            voucherNumber: '0004146',
            date: new Date('2018-09-05'),
            amount: 6320.00,
            payments: 6,
            denied: true
        },
        {
            voucherNumber: '0004170',
            date: new Date('2018-09-20'),
            amount: 1260.00,
            payments: 6,
            denied: true
        },
        {
            voucherNumber: '0004061',
            date: new Date('2018-08-02'),
            amount: 4434.40,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004060',
            date: new Date('2018-08-02'),
            amount: 2945.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004059',
            date: new Date('2018-08-02'),
            amount: 6320.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004058',
            date: new Date('2018-08-02'),
            amount: 8564.40,
            payments: 3,
            denied: true
        },
        {
            voucherNumber: '0004081',
            date: new Date('2018-08-12'),
            amount: 5733.36,
            payments: 3,
            denied: true
        },
        {
            voucherNumber: '0004062',
            date: new Date('2018-08-02'),
            amount: 1474.20,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004064',
            date: new Date('2018-08-02'),
            amount: 3240.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004063',
            date: new Date('2018-08-02'),
            amount: 2149.75,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004071',
            date: new Date('2018-08-05'),
            amount: 7417.80,
            payments: 8,
            denied: true
        },
        {
            voucherNumber: '0004099',
            date: new Date('2018-08-15'),
            amount: 2460.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004109',
            date: new Date('2018-08-21'),
            amount: 2925.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0003990',
            date: new Date('2018-07-02'),
            amount: 5733.76,
            payments: 1
        },
        {
            voucherNumber: '0003995',
            date: new Date('2018-07-02'),
            amount: 2260.00,
            payments: 1
        },
        {
            voucherNumber: '0003988',
            date: new Date('2018-07-02'),
            amount: 10904.40,
            payments: 6
        },
        {
            voucherNumber: '0003989',
            date: new Date('2018-07-02'),
            amount: 7312.50,
            payments: 3
        },
        {
            voucherNumber: '0004002',
            date: new Date('2018-07-03'),
            amount: 6320.00,
            payments: 4
        },
        {
            voucherNumber: '0003991',
            date: new Date('2018-07-02'),
            amount: 2945.00,
            payments: 1
        },
        {
            voucherNumber: '0003992',
            date: new Date('2018-07-02'),
            amount: 6480.00,
            payments: 4
        },
        {
            voucherNumber: '0004031',
            date: new Date('2018-07-19'),
            amount: 1260.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0004035',
            date: new Date('2018-07-22'),
            amount: 2925.00,
            payments: 1,
            denied: true
        },
        {
            voucherNumber: '0003931',
            date: new Date('2018-06-03'),
            amount: 2110.83,
            payments: 1
        },
        {
            voucherNumber: '0003922',
            date: new Date('2018-06-03'),
            amount: 2945.00,
            payments: 1
        },
        {
            voucherNumber: '0003921',
            date: new Date('2018-06-03'),
            amount: 5733.76,
            payments: 1
        },
        {
            voucherNumber: '0003920',
            date: new Date('2018-06-03'),
            amount: 7394.40,
            payments: 1
        },
        {
            voucherNumber: '0003939',
            date: new Date('2018-06-10'),
            amount: 4563.00,
            payments: 2
        },
        {
            voucherNumber: '0003950',
            date: new Date('2018-06-14'),
            amount: 2160.00,
            payments: 1
        },
        {
            voucherNumber: '0003932',
            date: new Date('2018-06-03'),
            amount: 3394.40,
            payments: 1
        },
        {
            voucherNumber: '0003924',
            date: new Date('2018-06-03'),
            amount: 6486.50,
            payments: 8
        },
        {
            voucherNumber: '0003923',
            date: new Date('2018-06-03'),
            amount: 17128.80,
            payments: 8
        },
        {
            voucherNumber: '0003938',
            date: new Date('2018-06-07'),
            amount: 6320.00,
            payments: 5
        },
        {
            voucherNumber: '0003854',
            date: new Date('2018-05-02'),
            amount: 6840.00,
            payments: 1
        },
        {
            voucherNumber: '0003858',
            date: new Date('2018-05-02'),
            amount: 2110.83,
            payments: 1
        },
        {
            voucherNumber: '0003853',
            date: new Date('2018-05-02'),
            amount: 3435.22,
            payments: 1
        },
        {
            voucherNumber: '0003852',
            date: new Date('2018-05-02'),
            amount: 8654.40,
            payments: 3
        },
        {
            voucherNumber: '0003851',
            date: new Date('2018-05-02'),
            amount: 13338.00,
            payments: 5
        },
        {
            voucherNumber: '0003866',
            date: new Date('2018-05-07'),
            amount: 1067.00,
            payments: 1
        },
        {
            voucherNumber: '0003877',
            date: new Date('2018-05-13'),
            amount: 1170.00,
            payments: 1
        },
        {
            voucherNumber: '0003856',
            date: new Date('2018-05-02'),
            amount: 2424.00,
            payments: 1
        },
        {
            voucherNumber: '0003855',
            date: new Date('2018-05-02'),
            amount: 1928.00,
            payments: 1
        },
        {
            voucherNumber: '0003903',
            date: new Date('2018-05-24'),
            amount: 1026.00,
            payments: 1
        },
        {
            voucherNumber: '0003912',
            date: new Date('2018-05-29'),
            amount: 7394.40,
            payments: 3
        },
        {
            voucherNumber: '0003918',
            date: new Date('2018-05-31'),
            amount: 3495.00,
            payments: 1
        },
        {
            voucherNumber: '0003791',
            date: new Date('2018-04-02'),
            amount: 3426.00,
            payments: 1
        },
        {
            voucherNumber: '0003790',
            date: new Date('2018-04-02'),
            amount: 3435.12,
            payments: 1
        },
        {
            voucherNumber: '0003789',
            date: new Date('2018-04-02'),
            amount: 2945.00,
            payments: 1
        },
        {
            voucherNumber: '0003788',
            date: new Date('2018-04-02'),
            amount: 5733.76,
            payments: 1
        },
        {
            voucherNumber: '0003787',
            date: new Date('2018-04-02'),
            amount: 7417.80,
            payments: 1
        },
        {
            voucherNumber: '0003799',
            date: new Date('2018-04-03'),
            amount: 7360.00,
            payments: 1
        },
        {
            voucherNumber: '0003806',
            date: new Date('2018-04-09'),
            amount: 3670.00,
            payments: 4
        },
        {
            voucherNumber: '0003814',
            date: new Date('2018-04-11'),
            amount: 1065.00,
            payments: 1
        },
        {
            voucherNumber: '0003792',
            date: new Date('2018-04-02'),
            amount: 4586.40,
            payments: 1
        },
        {
            voucherNumber: '0003793',
            date: new Date('2018-04-02'),
            amount: 11536.20,
            payments: 6
        },
        {
            voucherNumber: '0003735',
            date: new Date('2018-03-02'),
            amount: 7815.60,
            payments: 1
        },
        {
            voucherNumber: '0003736',
            date: new Date('2018-03-02'),
            amount: 5733.76,
            payments: 1
        },
        {
            voucherNumber: '0003737',
            date: new Date('2018-03-02'),
            amount: 2945.00,
            payments: 1
        },
        {
            voucherNumber: '0003738',
            date: new Date('2018-03-02'),
            amount: 17130.00,
            payments: 5
        },
        {
            voucherNumber: '0003739',
            date: new Date('2018-03-04'),
            amount: 7511.40,
            payments: 1
        },
        {
            voucherNumber: '0003743',
            date: new Date('2018-03-06'),
            amount: 3435.12,
            payments: 1
        },
        {
            voucherNumber: '0003750',
            date: new Date('2018-03-12'),
            amount: 1065.00,
            payments: 1
        },
        {
            voucherNumber: '0003762',
            date: new Date('2018-03-15'),
            amount: 5768.10,
            payments: 6
        },
        {
            voucherNumber: '0003774',
            date: new Date('2018-03-22'),
            amount: 3945.00,
            payments: 1
        },
        {
            voucherNumber: '0003777',
            date: new Date('2018-03-25'),
            amount: 2965.00,
            payments: 1
        },
        {
            voucherNumber: '0003683',
            date: new Date('2018-02-02'),
            amount: 7417.80,
            payments: 1
        },
        {
            voucherNumber: '0003684',
            date: new Date('2018-02-02'),
            amount: 2110.36,
            payments: 1
        },
        {
            voucherNumber: '0003685',
            date: new Date('2018-02-02'),
            amount: 8565.57,
            payments: 1
        },
        {
            voucherNumber: '0003686',
            date: new Date('2018-02-02'),
            amount: 3071.36,
            payments: 1
        },
        {
            voucherNumber: '0003690',
            date: new Date('2018-02-04'),
            amount: 4733.33,
            payments: 1
        },
        {
            voucherNumber: '0003699',
            date: new Date('2018-02-09'),
            amount: 2965.00,
            payments: 1
        },
        {
            voucherNumber: '0003718',
            date: new Date('2018-02-20'),
            amount: 3495.00,
            payments: 1
        },
        {
            voucherNumber: '0003598',
            date: new Date('2018-01-01'),
            amount: 2110.36,
            payments: 1
        },
        {
            voucherNumber: '0003612',
            date: new Date('2018-01-02'),
            amount: 3071.33,
            payments: 1
        },
        {
            voucherNumber: '0003611',
            date: new Date('2018-01-02'),
            amount: 2945.00,
            payments: 1
        },
        {
            voucherNumber: '0003610',
            date: new Date('2018-01-02'),
            amount: 4733.33,
            payments: 1
        },
        {
            voucherNumber: '0003609',
            date: new Date('2018-01-02'),
            amount: 7394.40,
            payments: 1
        },
        {
            voucherNumber: '0003608',
            date: new Date('2018-01-02'),
            amount: 7394.40,
            payments: 1
        },
        {
            voucherNumber: '0003628',
            date: new Date('2018-01-07'),
            amount: 7417.80,
            payments: 3
        },
        {
            voucherNumber: '0003639',
            date: new Date('2018-01-10'),
            amount: 5945.00,
            payments: 1
        },
        {
            voucherNumber: '0003547',
            date: new Date('2017-12-03'),
            amount: 7394.40,
            payments: 1
        },
        {
            voucherNumber: '0003548',
            date: new Date('2017-12-03'),
            amount: 2110.36,
            payments: 1
        },
        {
            voucherNumber: '0003549',
            date: new Date('2017-12-03'),
            amount: 7460.30,
            payments: 1
        },
        {
            voucherNumber: '0003550',
            date: new Date('2017-12-03'),
            amount: 3071.25,
            payments: 1
        },
        {
            voucherNumber: '0003557',
            date: new Date('2017-12-06'),
            amount: 2945.00,
            payments: 1
        },
        {
            voucherNumber: '0003489',
            date: new Date('2017-11-02'),
            amount: 8460.30,
            payments: 1
        },
        {
            voucherNumber: '0003487',
            date: new Date('2017-11-02'),
            amount: 2110.36,
            payments: 1
        },
        {
            voucherNumber: '0003488',
            date: new Date('2017-11-02'),
            amount: 3071.25,
            payments: 1
        },
        {
            voucherNumber: '0003441',
            date: new Date('2017-10-02'),
            amount: 4733.33,
            payments: 1
        },
        {
            voucherNumber: '0003443',
            date: new Date('2017-10-02'),
            amount: 6394.10,
            payments: 1
        },
        {
            voucherNumber: '0003440',
            date: new Date('2017-10-02'),
            amount: 7120.00,
            payments: 1
        },
        {
            voucherNumber: '0003444',
            date: new Date('2017-10-06'),
            amount: 7120.00,
            payments: 1
        },
        {
            voucherNumber: '0003464',
            date: new Date('2017-10-19'),
            amount: 1000.00,
            payments: 1
        },
        {
            voucherNumber: '0003369',
            date: new Date('2017-09-03'),
            amount: 6040,
            payments: 1
        },
        {
            voucherNumber: '0003368',
            date: new Date('2017-09-03'),
            amount: 7945,
            payments: 1
        },
        {
            voucherNumber: '0003377',
            date: new Date('2017-09-05'),
            amount: 8000,
            payments: 1
        },
        {
            voucherNumber: '0003378',
            date: new Date('2017-09-05'),
            amount: 2300,
            payments: 1
        },
        {
            voucherNumber: '0003381',
            date: new Date('2017-09-06'),
            amount: 2000,
            payments: 1
        },
        {
            voucherNumber: '0003421',
            date: new Date('2017-09-24'),
            amount: 1755,
            payments: 1
        },
        {
            voucherNumber: '0003304',
            date: new Date('2017-08-09'),
            amount: 9150,
            payments: 3
        },
        {
            voucherNumber: '0003306',
            date: new Date('2017-08-10'),
            amount: 1200,
            payments: 1
        },
        {
            voucherNumber: '0003361',
            date: new Date('2017-08-31'),
            amount: 2965,
            payments: 2
        },
    ];

    paymentService.getPayments = () => _.sortBy(payments, 'date');
    return paymentService;
}]);