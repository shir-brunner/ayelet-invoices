angular.module('ayelet').service('proService', [function () {
    let proService = this;
    let pros = [
        {
            number: '08/004094',
            date: new Date('2018-09-06 12:12:00'),
            items: [
                { desc: 'טיפול בפייסבוק כולל עיצוב גראפיים', quantity: 12, pricePerUnit: 1620 },
                { desc: 'קידום פוסט אחד שיוחלט', quantity: 1, pricePerUnit: 100 },
            ],
            totalAmount: 22861.80,
            image: 'pro1',
            signed: false
        },
        {
            number: '08/004064',
            date: new Date('2018-07-18 14:01:00'),
            items: [
                { desc: 'דף נחיתה מילויי פרטים', quantity: 12, pricePerUnit: 1225 },
            ],
            totalAmount: 17199,
            image: 'pro2',
            signed: true
        },
        {
            number: '08/004054',
            date: new Date('2018-06-25 11:58:00'),
            items: [
                { desc: 'עמוד במגזין ליברל חודש יולי חשיפה גדולה טסים לחו"ל', quantity: 1, pricePerUnit: 6250 },
            ],
            totalAmount: 7312.50,
            image: 'pro3',
            signed: false
        },
        {
            number: '08/004025',
            date: new Date('2018-05-13 17:24:00'),
            items: [
                { desc: 'תחזוקת אתר למשך שנה', quantity: 12, pricePerUnit: 1220 },
            ],
            totalAmount: 17128.80,
            image: 'pro4',
            signed: false
        },
        {
            number: '08/004008',
            date: new Date('2018-04-22 14:33:00'),
            items: [
                { desc: 'עבור תשלום פייסבוק כולל עיצוב ועריכה', quantity: 1, pricePerUnit: 7450 },
                { desc: 'תוכן שיווקי', quantity: 1, pricePerUnit: 3950 },
            ],
            totalAmount: 13338,
            image: 'pro5',
            signed: true
        },
        {
            number: '08/004004',
            date: new Date('2018-03-26 11:56:00'),
            items: [
                { desc: 'פרסום דיגטלי מסע אחר', quantity: 1, pricePerUnit: 3120 },
                { desc: 'פרסום דיגטלי מסע אחר למשך כל חודש אפריל', quantity: 1, pricePerUnit: 800 },
            ],
            totalAmount: 4586.40,
            image: 'pro6',
            signed: false
        },
        {
            number: '08/003995',
            date: new Date('2018-03-01 13:45:00'),
            items: [
                { desc: 'טיפול באתר ובפייסבוק במשך שנה העלאת תכנים איפיון והעלאת פוסטים', quantity: 12, pricePerUnit: 970 },
                { desc: 'תחזוקת האתר והתאמת תכניים', quantity: 12, pricePerUnit: 250 },
            ],
            totalAmount: 17128.80,
            image: 'pro7',
            signed: true
        },
        {
            number: '08/003926',
            date: new Date('2017-09-05 09:09:00'),
            items: [
                { desc: 'בניית אתר עבור', quantity: 1, pricePerUnit: 18700 },
                { desc: 'אחזקה דומיין אחסון', quantity: 1, pricePerUnit: 1125 },
            ],
            totalAmount: 23195.30,
            image: 'pro8',
            signed: false
        },
        {
            number: '08/003923',
            date: new Date('2017-08-31 11:18:00'),
            items: [
                { desc: 'עמוד נוסף במגזין ליבראל', quantity: 1, pricePerUnit: 6340 },
            ],
            totalAmount: 7417.80,
            image: 'pro9',
            signed: false
        },
        {
            number: '08/003914',
            date: new Date('2017-08-10 10:37:00'),
            items: [
                { desc: 'פרסום בנבחרת לשנה', quantity: 12, pricePerUnit: 240 },
            ],
            totalAmount: 3369.60,
            image: 'pro10',
            signed: false
        },
    ];

    proService.getPros = term => {
        return _.sortBy(pros, 'date').filter(pro => {
            if(!term) return true;

            return _.some(pro.items, item => item.desc.indexOf(term) !== -1);
        });
    };

    return proService;
}]);