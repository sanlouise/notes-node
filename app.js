const _ = require('lodash');
const fs = require('fs');
let command = process.argv[2]; //list

console.log(process.argv);

if (command === 'add') {
  console.log('adding a note')
} if (command === 'list') {
  console.log('listing all notes');
} else {
  console.log('command not found');
}
