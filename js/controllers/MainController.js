angular.module('ayelet').controller('mainController', ['$scope', 'orderService', 'proService', 'defferedService', 'invoiceService', 'receiptInvoiceService', 'paymentService', function ($scope, orderService, proService, defferedService, invoiceService, receiptInvoiceService, paymentService) {
    $scope.sumAmount = entries => entries.reduce((acc, entry) => acc += (entry.amount || entry.totalAmount), 0);
    $scope.sumAmountForCard = card => $scope.payments.filter(x => x.card === card).reduce((acc, payment) => acc += payment.amount, 0);

    $scope.sumRefundedAmount = () => {
        let refundedAmount = $scope.payments.filter(x => x.refunded).reduce((acc, payment) => acc += payment.amount, 0);
        let partialRefundsAmount = $scope.payments.filter(x => x.partialRefunds).reduce((acc, payment) => {
            return acc + payment.partialRefunds.reduce((sum, refund) => sum += refund.amount, 0);
        }, 0);
        let unknownRefundsAmount = $scope.unknownRefunds.reduce((acc, unknownRefund) => acc + unknownRefund.amount, 0);

        return refundedAmount + partialRefundsAmount + unknownRefundsAmount;
    };
    $scope.sumRefundedInterest = () => {
        let refundedInterest = $scope.payments.filter(x => x.refunded).reduce((acc, payment) => acc += payment.refundInterest, 0);
        let partialRefundInterest = $scope.payments.filter(x => x.partialRefunds).reduce((acc, payment) => {
            return acc + payment.partialRefunds.reduce((sum, refund) => sum += refund.interest, 0);
        }, 0);
        return refundedInterest + partialRefundInterest;
    };

    $scope.search = () => {
        $scope.orders = orderService.getOrders($scope.searchTerm);
        $scope.pros = proService.getPros($scope.searchTerm);
        $scope.deffereds = defferedService.getDeffereds($scope.searchTerm);
        $scope.invoices = invoiceService.getInvoices($scope.searchTerm);
        $scope.receiptInvoices = receiptInvoiceService.getReceiptInvoices($scope.searchTerm);
        $scope.payments = paymentService.getPayments($scope.searchTerm);
        $scope.items = getItems($scope);
        $scope.unknownRefunds = paymentService.getUnknownRefunds();

        $scope.byMonth = groupPaymentsByMonth($scope.payments);
        $scope.showConnections && setTimeout(() => showConnections($scope.linkType), 10);
    };
    $scope.search();

    $scope.toggleConnections = linkType => {
        if ($scope.linkType === linkType && $scope.showConnections) {
            $scope.showConnections = false;
            return;
        } else if (!$scope.showConnections)
            $scope.showConnections = true;

        $scope.linkType = linkType;
        $scope.showConnections && showConnections(linkType);
    };

    $scope.getTimelineDetails = payment => getTimelineDetails(payment, $scope);
}]);

function showConnections(linkType) {
    let $payments = $('#payments').find('.payment');
    let $body = $('body');
    let $connections = $('#connections');
    let scrollHeight = $body[0].scrollHeight;
    let canvas = $connections[0];
    let context = canvas.getContext('2d');
    canvas.width = $(window).width();
    canvas.height = scrollHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);

    $('.connectable').each(function () {
        if (linkType === 'amount')
            linkAmounts($(this), $payments, context);
        else if (linkType === 'amountAndDate')
            linkAmountsAndDates($(this), $payments, context);
    });
}

function linkAmounts($table, $payments, context) {
    $table.find('.amount').each(function () {
        let $rightAmount = $(this);
        let amount = $rightAmount.html();
        $payments.each(function () {
            let $payment = $(this);
            let $leftAmount = $payment.find('.amount');
            if ($leftAmount.html() === amount)
                amountsMatch($leftAmount, $rightAmount, context);
        });
    });
}

function linkAmountsAndDates($table, $payments, context) {
    let $rows = $table.find('tbody tr');
    $rows.each(function () {
        let $row = $(this);
        let $date = $row.find('.date');
        let $amount = $row.find('.amount');
        $payments.each(function () {
            let $payment = $(this);
            let $paymentAmount = $payment.find('.amount');
            let $paymentDate = $payment.find('.date');
            if ($date.html() === $paymentDate.html() && $amount.html() === $paymentAmount.html()) {
                amountsMatch($paymentAmount, $amount, context);
            }
        });
    });
}

function amountsMatch($leftAmount, $rightAmount, context) {
    let offset1 = $leftAmount.offset();
    let offset2 = $rightAmount.offset();

    context.beginPath();
    context.moveTo(offset1.left + $leftAmount.outerWidth() / 2, offset1.top + $leftAmount.outerHeight() / 2);
    context.lineTo(offset2.left + $rightAmount.outerWidth() / 2, offset2.top + $rightAmount.outerHeight() / 2);
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
    context.stroke();
}

function getTimelineDetails(payment, $scope) {
    return [
        getDetails($scope.orders, payment),
        getDetails($scope.pros, payment),
        getDetails($scope.deffereds, payment),
        getDetails($scope.invoices, payment),
        getDetails($scope.receiptInvoices, payment)
    ].filter(x => x).join(', ');
}

function getDetails(entries, payment) {
    let details = '';
    entries.forEach(entry => {
        if (entry.totalAmount === payment.amount) {
            details = entry.items.map(item => item.desc).join(', ');
        }
    });
    return details;
}

function getItems($scope) {
    return _.flattenDeep([
        $scope.orders.map(order => order.items),
        $scope.pros.map(pro => pro.items),
        $scope.deffereds.map(deffered => deffered.items),
        $scope.invoices.map(invoice => invoice.items),
        $scope.receiptInvoices.map(receiptInvoice => receiptInvoice.items),
    ]);
}

function groupPaymentsByMonth(payments) {
    let byMonth = {};
    payments.forEach(payment => {
        let paymentDate = moment(payment.date);
        let monthName = paymentDate.format('MM/YYYY');
        if (!byMonth[monthName])
            byMonth[monthName] = { monthName: monthName, payments: [] };

        byMonth[monthName].payments.push(payment);
    });
    return _.values(byMonth);
}