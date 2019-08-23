angular.module('ayelet').service('oneReceiptInvoiceService', [function () {
    let receiptInvoiceService = this;
    let receiptInvoices = [
        {
            number: '02/001055',
            date: new Date('2018-09-02 10:10:00'),
            items: [
                { desc: 'עבור פרסום ליברל', quantity: 1, pricePerUnit: 2769.23 },
            ],
            totalAmount: 3240,
            image: 'rec_invoice1'
        },
        {
            number: '02/001056',
            date: new Date('2018-09-02 10:11:00'),
            items: [
                { desc: 'עבור פרסום חודש יולי כריכה אחורית', quantity: 1, pricePerUnit: 5401.71 },
            ],
            totalAmount: 6320,
            image: 'rec_invoice2'
        },
        {
            number: '02/001054',
            date: new Date('2018-09-02 10:07:00'),
            items: [
                { desc: 'כתבות', quantity: 1, pricePerUnit: 4900.31 },
            ],
            totalAmount: 5733.36,
            image: 'rec_invoice3'
        },
        {
            number: '02/001053',
            date: new Date('2018-09-02 10:05:00'),
            items: [
                { desc: 'תשלום 3/3 עבור ליברל', quantity: 1, pricePerUnit: 2517.09 },
                { desc: 'תשלום עבור עולם אחר 2/8 תשלומים שווים', quantity: 1, pricePerUnit: 1837.43 },
            ],
            totalAmount: 5094.80,
            image: 'rec_invoice4'
        },
        {
            number: '02/000830',
            date: new Date('2018-01-02 09:35:00'),
            items: [
                { desc: 'עבור מגזין ליבראל', quantity: 1, pricePerUnit: 6320 },
            ],
            totalAmount: 7394.40,
            image: 'rec_invoice5'
        },
        {
            number: '02/000996',
            date: new Date('2018-07-02 10:10:00'),
            items: [
                { desc: 'עבור עמוד פרסומי', quantity: 1, pricePerUnit: 6250 },
            ],
            totalAmount: 7312.50,
            image: 'rec_invoice6'
        },
        {
            number: '02/000969',
            date: new Date('2018-05-31 12:43:00'),
            items: [
                { desc: 'עבור כתבות ממונות חודש מרץ', quantity: 1, pricePerUnit: 2987.18 },
            ],
            totalAmount: 3495,
            image: 'rec_invoice7'
        },
        {
            number: '02/000961',
            date: new Date('2018-05-29 09:43:00'),
            items: [
                { desc: 'עבור פרסום במגזין ליברל חודש מאי', quantity: 1, pricePerUnit: 6320 },
            ],
            totalAmount: 7394.40,
            image: 'rec_invoice8'
        },
        {
            number: '02/000829',
            date: new Date('2018-01-02 09:34:00'),
            items: [
                { desc: 'עבור עמוד במגזין ליבראל', quantity: 1, pricePerUnit: 6320 },
            ],
            totalAmount: 7394.40,
            image: 'rec_invoice9'
        },
        {
            number: '02/000831',
            date: new Date('2018-01-02 09:39:00'),
            items: [
                { desc: 'ניהול שוטף 2018 הכנסת תכנים ועיצוב', quantity: 1, pricePerUnit: 4045.58 },
            ],
            totalAmount: 4733.33,
            image: 'rec_invoice10'
        },
        {
            number: '02/000834',
            date: new Date('2018-01-02 09:50:00'),
            items: [
                { desc: 'כתבות ממומנות', quantity: 1, pricePerUnit: 2625.07 },
            ],
            totalAmount: 3071.33,
            image: 'rec_invoice11'
        },
        {
            number: '02/000833',
            date: new Date('2018-01-02 09:45:00'),
            items: [
                { desc: 'השלמה לדאבל מגזין ליברל', quantity: 1, pricePerUnit: 2517.09 },
            ],
            totalAmount: 2945,
            image: 'rec_invoice12'
        },
        {
            number: '02/000832',
            date: new Date('2018-01-02 09:40:00'),
            items: [
                { desc: 'סטריפ שער הוצאת הארץ', quantity: 1, pricePerUnit: 1803.73 },
            ],
            totalAmount: 2110.36,
            image: 'rec_invoice13'
        },
        {
            number: '02/000861',
            date: new Date('2018-02-04 09:20:00'),
            items: [
                { desc: 'עבור עמוד במגזין ינואר - ליברל', quantity: 1, pricePerUnit: 6340 },
            ],
            totalAmount: 7417.80,
            image: 'rec_invoice14'
        },
        {
            number: '02/000860',
            date: new Date('2018-02-04 09:19:00'),
            items: [
                { desc: 'עמוד מגזין ליברל לפני החצי', quantity: 1, pricePerUnit: 7321 },
            ],
            totalAmount: 8565.60,
            image: 'rec_invoice15'
        }
    ];

    receiptInvoiceService.getReceiptInvoices = term => {
        return _.sortBy(receiptInvoices, 'date').filter(receiptInvoice => {
            if(!term) return true;

            return _.some(receiptInvoice.items, item => item.desc.indexOf(term) !== -1);
        });
    };

    return receiptInvoiceService;
}]);