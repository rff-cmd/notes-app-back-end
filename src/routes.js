/* eslint-disable no-template-curly-in-string */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable array-bracket-spacing */
/* eslint-disable comma-dangle */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteHandler,
  deleteNoteHandler,
} = require('./handler');

const routes = [{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteHandler,
  }
];

module.exports = routes;