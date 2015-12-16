var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf());
var timestamp = 1450293440842;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));


// // now.subtract(1, 'year');

// // console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma'));       // Oct 5th 2015, 6:45 pm

console.log(timestampMoment.format('MMM Do YYYY, h:mma')); 

