const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes')

let user = os.userInfo();
let res = notes.add(2, 3);

console.log('Starting app');

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
console.log(res);
