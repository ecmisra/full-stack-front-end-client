const store = require('./../store.js')

const addDirectorSuccess = function (addDirectorResponse) {
  store.user = addDirectorResponse.user
  $('#message').html('You have successfully changed your password. Feeling paranoid, are we?')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

module.exports = {
  addDirectorSuccess
}
