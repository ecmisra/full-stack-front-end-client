const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onAddDirector = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.addDirector(data.director.first_name, data.director.last_name, data.director.born_on, data.director.famous_movies)
    .then(() => onGetDirectors(event))
    .then(ui.addDirectorSuccess)
    .catch(ui.addDirectorFailure)
}

const onGetDirectors = function (event) {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.getDirectors()
    .then(ui.getDirectorsSuccess)
    .catch(ui.addDirectorFailure)
}

const onUpdateDirectors = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  // console.log(data)
  api.updateDirector(data.directors.id, data.directors.first_name, data.directors.last_name, data.directors.born_on, data.directors.famous_movies)
    .then(() => onGetDirectors(event))
    .then(ui.updateDirectorSuccess)
    .catch(ui.addDirectorFailure)
}

const onDeleteDirector = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  // console.log(id.directors.id)
  api.deleteDirector(id.directors.id)
    .then(() => onGetDirectors(event))
    .then(ui.deleteDirectorSuccess)
    .catch(ui.addDirectorFailure)
}

const addHandlers = () => {
  $('#add-director').on('submit', onAddDirector)
  $('#get-directors').on('click', onGetDirectors)
  $('#edit-director-form').on('submit', onUpdateDirectors)
  $('#delete-director-form').on('submit', onDeleteDirector)
}

module.exports = {
  addHandlers,
  onAddDirector,
  onGetDirectors,
  onUpdateDirectors,
  onDeleteDirector
}
