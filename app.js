const _ = require('lodash');
const fs = require('fs');
let command = process.argv[2]; //list

switch (command) {
  case "add":
  console.log('adding a note');
  break;

  case "list":
  console.log('listing all notes');
  break;

  case "read":
  console.log('reading a note');
  break;

  default:
  console.log('command not found');
}
