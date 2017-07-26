console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {

  let notes = [];
  let note = {
    title,
    body,
  };

  //Check if there are notes with invalid properties
  try {
    //Fetch existing notes
    const existingNotesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(existingNotesString);
  } catch(e) {

  }


  //Push new note
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
