angular.module('ayelet').service('orderService', [function() {
    let orderService = this;
    let orders = [
        {
            number: '07/000277',
            date: new Date('2018-03-15 10:23:00'),
            items: [
                { desc: 'סרטון עבור אתר האינטרנט והפייסבוק', quantity: 1, pricePerUnit: 7860 },
                { desc: 'עמוד מגזין דה מרקר ספטמבר 2018', quantity: 1, pricePerUnit: 2000 },
            ],
            totalAmount: 11536.20,
            image: 'order1',
            signed: true
        },
        {
            number: '07/000243',
            date: new Date('2017-11-21 17:07:00'),
            items: [
                { desc: 'עמוד במגזין ליבראל השלמה לדאבל', quantity: 1, pricePerUnit: 6320 },
            ],
            totalAmount: 7394.40,
            image: 'order2',
            signed: false
        },
        {
            number: '07/000220',
            date: new Date('2017-11-02 16:23:00'),
            items: [
                { desc: 'עמוד במגזין ליברל', quantity: 1, pricePerUnit: 6120 },
            ],
            totalAmount: 7160.40,
            image: 'order3',
            signed: false
        },
        {
            number: '07/000208',
            date: new Date('2017-10-19 09:22:00'),
            items: [
                { desc: 'סטריפ על השער של דה מרקר', quantity: 1, pricePerUnit: 6265 },
            ],
            totalAmount: 7330.10,
            image: 'order4',
            signed: false
        },
        {
            number: '07/000201',
            date: new Date('2017-10-02 17:48:00'),
            items: [
                { desc: 'באנר באתר המתנות', quantity: 1, pricePerUnit: 5465 },
            ],
            totalAmount: 6394.10,
            image: 'order5',
            signed: true
        },
        {
            number: '07/000187',
            date: new Date('2017-09-06 13:08:00'),
            items: [
                { desc: '20 כתבות תוכן שיווקי שיטמעו באתר', quantity: 20, pricePerUnit: 1200 },
                { desc: 'טיפול ובניית דף הפייסבוק', quantity: 1, pricePerUnit: 2000 },
            ],
            totalAmount: 30420,
            image: 'order6',
            signed: false
        },
        {
            number: '07/000181',
            date: new Date('2017-08-09 13:29:00'),
            items: [
                { desc: 'עמוד במגזין ליבראל היוקרתי', quantity: 1, pricePerUnit: 5709 },
                { desc: 'קופרייטרית כולל ראיון', quantity: 1, pricePerUnit: 188 },
            ],
            totalAmount: 6900,
            image: 'order7',
            signed: false
        },
        {
            number: '07/000182',
            date: new Date('2017-08-09 13:40:00'),
            items: [
                {
                    desc: 'עמוד במגזין ליבראל היוקרתי מהזמנה מספר: 181 מיום: 09/08/17 הזמנה 100 המשפיעים',
                    quantity: 1,
                    pricePerUnit: 5709
                },
                {
                    desc: 'קופרייטרית כולל ראיון מהזמנה מספר: 181 מיום: 09/08/17 הזמנה 100 המשפיעים',
                    quantity: 1,
                    pricePerUnit: 188
                },
                { desc: 'הפרסום מיועד לחג', quantity: 1, pricePerUnit: 3632.47 },
            ],
            totalAmount: 11150,
            image: 'order8',
            signed: false
        },
        {
            number: '07/000190',
            date: new Date('2017-09-12 13:47:00'),
            items: [
                { desc: 'פרסום באנר באתר המתנות', quantity: 12, pricePerUnit: 520 },
                { desc: 'כולל עיצוב איחסון ועריכה', quantity: 1, pricePerUnit: 150 },
            ],
            totalAmount: 7476.30,
            image: 'order9',
            signed: false
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