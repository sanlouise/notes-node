console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body,
  };

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

const getAll = () => {
  console.log('Getting all notes');

}

const readNote = () => {
  console.log('Reading note');
}

const removeNote = () => {
  console.log('Removing note');
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
};
