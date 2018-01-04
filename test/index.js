const parser = require('cron-parser');

try {
    const interval = parser.parseExpression('49 11 * * MON-FRI');

    console.log('Date: ', interval.next().toString());
    console.log('Date: ', interval.next().toString());
    console.log('Date: ', interval.next().toString());

    console.log('Date: ', interval.prev().toString());
    console.log('Date: ', interval.prev().toString());
    console.log('Date: ', interval.prev().toString());
    console.log('Date: ', interval.prev().toString());
    console.log('Date: ', interval.prev().toString());
    console.log('Date: ', interval.prev().toString());
} catch (err) {
    console.log('Error: ' + err.message);
}