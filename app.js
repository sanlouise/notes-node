const _ = require('lodash');
const notes = require('./notes')
const fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;
let command = process.argv[2];

switch (command) {

  case "add": {
    let note = notes.addNote(argv.title, argv.body)
    if (note) {
      notes.logNote(note);
    } else {
      console.log("Oops, duplicate title!")
    }
    break;
  }

  case "read": {
    let readNote = notes.getNote(argv.title);
    if (readNote) {
      console.log('notes', notes);
      notes.logNote(readNote);
    } else {
      console.log("Oops, could not find that note!")
    }
    break;
  }

  case "list": {
    notes.getAll()
    break;
  }
  case "remove": {
    const removedNote = notes.removeNote(argv.title, argv.body);
    const message = removedNote ? "The note was removed" : "The note was not removed";
    console.log(message);
    break;
  }
  default: {
    console.log("command not found");
  }
}
