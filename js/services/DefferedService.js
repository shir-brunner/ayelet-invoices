angular.module('ayelet').service('defferedService', [function() {
    let defferedService = this;
    let deffereds = [
        {
            number: '03/000545',
            date: new Date('2017-08-10 10:44:00'),
            items: [
                { desc: 'עבור פרסום במגזין', amount: 3716.60 },
            ],
            totalAmount: 3716.60,
            image: 'deffered1'
        },
        {
            number: '03/000558',
            date: new Date('2017-09-05 09:28:00'),
            items: [
                { desc: 'בניית אתר', amount: 8000 },
                { desc: 'בניית אתר', amount: 2300 },
            ],
            totalAmount: 10300,
            image: 'deffered2'
        },
        {
            number: '03/000544',
            date: new Date('2017-08-10 10:43:00'),
            items: [
                { desc: 'מקדמה עבור פרסום', amount: 1200 },
            ],
            totalAmount: 1200,
            image: 'deffered3'
        },
    ];

    defferedService.getDeffereds = term => {
        return _.sortBy(deffereds, 'date').filter(deffered => {
            if(!term) return true;

            return _.some(deffered.items, item => item.desc.indexOf(term) !== -1);
        });
    };

    return defferedService;
}]);