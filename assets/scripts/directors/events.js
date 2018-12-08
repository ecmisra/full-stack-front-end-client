const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onAddDirector = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.addDirector(data)
    .then(ui.addDirectorSuccess)
    .catch(ui.addDirectorFailure)
}

const onGetDirectors = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.getDirectors(data)
    .then(ui.getDirectorsSuccess)
    .catch(ui.addDirectorFailure)
}

const addHandlers = () => {
  $('#new-director').on('click', onAddDirector)
  $('#get-directors').on('click', onGetDirectors)
}

module.exports = {
  addHandlers,
  onAddDirector,
  onGetDirectors
}
