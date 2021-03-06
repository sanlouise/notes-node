console.log('Starting notes.js');
const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  console.log('Getting note', title);
  let notes = fetchNotes();
  const filteredNotes = notes.find((note) => note.title === title);
  return filteredNotes[0];
};

const removeNote = (title) => {
  console.log('Removing note', title);

  let notes = fetchNotes();
  let filteredNotes = notes.find((note) => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length;
};

const logNote = (note) => {
  console.log('-------');
  console.log(`${note.title}`);
  console.log(`${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
