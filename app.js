const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');
const filteredArray = _.uniq([2, 2, 2, 23, 1]);


let user = os.userInfo();
let res = notes.add(2, 3);

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);


console.log(_.isString(true));
console.log(_.isString('true'));
console.log(filteredArray);
console.log('Starting app');
console.log(res);
