const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onAddDirector = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('#add-director').on('submit', onAddDirector)
}

module.exports = {
  addHandlers,
  onAddDirector
}
