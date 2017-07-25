const _ = require('lodash');
const notes = require('./notes')
const fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;
let command = process.argv[2];

switch (command) {
  case "add":
  notes.addNote(argv.title, argv.body)
  break;

  case "list":
  notes.getAll()
  break;

  case "read":
  notes.readNote(argv.title, argv.body)
  break;

  case "remove":
  notes.removeNote(argv.title, argv.body)
  break;

  default:
  console.log("command not found");
}
