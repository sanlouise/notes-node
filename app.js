const _ = require('lodash');
const notes = require('./notes')
const fs = require('fs');
const yargs = require('yargs');

//Demand makes it required, alias allows you to type shortcut
const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: "body of note",
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', "List all notes")
  .command('read, Read a note', {
    title: titleOptions
  })
  .command('remove, Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

let command = argv._[0];

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
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach((note) => notes.logNote(note));
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
