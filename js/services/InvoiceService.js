angular.module('ayelet').service('invoiceService', [function () {
    let invoiceService = this;
    let invoices = [
        {
            number: '01/003533',
            date: new Date('2018-07-26 15:05:00'),
            items: [
                { desc: 'קבלת דחויים מספר 663, עבור פרסום בפייסבוק', quantity: 1, pricePerUnit: 1804.13 },
            ],
            totalAmount: 2110.83,
            image: 'invoice1'
        },
        {
            number: '01/003586',
            date: new Date('2018-08-09 13:26:00'),
            items: [
                { desc: 'קבלת דחויים מספר 706', quantity: 1, pricePerUnit: 1076.92 },
            ],
            totalAmount: 1260,
            image: 'invoice2'
        },
        {
            number: '01/003587',
            date: new Date('2018-08-09 13:26:00'),
            items: [
                { desc: 'קבלת דחויים מספר 707, תשלום 2/3 עבור מגזין ליברל', quantity: 1, pricePerUnit: 2500 },
            ],
            totalAmount: 2925,
            image: 'invoice3'
        },
        {
            number: '01/003554',
            date: new Date('2018-08-08 10:49:00'),
            items: [
                { desc: 'קבלת דחויים מספר 672, עבור פרסום במגזין ליברל', quantity: 1, pricePerUnit: 1080.34 },
            ],
            totalAmount: 1264,
            image: 'invoice4'
        },
        {
            number: '01/003556',
            date: new Date('2018-08-08 10:50:00'),
            items: [
                { desc: 'קבלת דחויים מספר 698, עבור כתבות', quantity: 1, pricePerUnit: 1931.62 },
            ],
            totalAmount: 2260,
            image: 'invoice5'
        },
        {
            number: '01/003492',
            date: new Date('2018-07-02 10:20:00'),
            items: [
                { desc: 'קבלת דחויים מספר 665, 500 העשירים של ישראל דאבל מגזין דה מרקר', quantity: 1, pricePerUnit: 797.95 },
            ],
            totalAmount: 933.60,
            image: 'invoice6'
        },
        {
            number: '01/003490',
            date: new Date('2018-07-02 10:20:00'),
            items: [
                { desc: 'קבלת דחויים מספר 660, עבור פרסום תשלומים', quantity: 1, pricePerUnit: 2517.09 },
            ],
            totalAmount: 2945,
            image: 'invoice7'
        },
        {
            number: '01/003491',
            date: new Date('2018-07-02 10:20:00'),
            items: [
                { desc: 'קבלת דחויים מספר 662, הזמנה באנר באינטרנט כולל עיצובים', quantity: 1, pricePerUnit: 692.95 },
            ],
            totalAmount: 810.75,
            image: 'invoice8'
        }
    ];

    invoiceService.getInvoices = term => {
        return _.sortBy(invoices, 'date').filter(invoice => {
            if(!term) return true;

            return _.some(invoice.items, item => item.desc.indexOf(term) !== -1);
        });
    };

    return invoiceService;
}]);