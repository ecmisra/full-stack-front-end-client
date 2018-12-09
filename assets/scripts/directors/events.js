const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onAddDirector = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.addDirector(data.director.first_name, data.director.last_name, data.director.born_on, data.director.famous_movies)
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
  console.log(data)
  api.updateDirector(data.directors.id, data.directors.first_name, data.directors.last_name, data.directors.born_on, data.directors.famous_movies)
    .then(ui.addDirectorSuccess)
    .catch(ui.addDirectorFailure)
}

const addHandlers = () => {
  $('#add-director').on('submit', onAddDirector)
  $('#get-directors').on('click', onGetDirectors)
  $('#edit-director-form').on('submit', onUpdateDirectors)
}

module.exports = {
  addHandlers,
  onAddDirector,
  onGetDirectors,
  onUpdateDirectors
}
