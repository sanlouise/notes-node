console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body)
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
};
