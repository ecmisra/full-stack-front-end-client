const store = require('./../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up! Lights...Camera...Action!')
  // $('#message').addClass('success-message')
  // $('#message').removeClass('error-message')
  $('#sign-up').addClass('hidden')
  // $('#score-display').addClass('hidden')
}

const signUpFailure = function (signUpFailureResponse) {
  $('#message').html('You ruined the shot. Try again.')
  // $('#message').removeClass('success-message')
  // $('#message').addClass('error-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').show(100)
  $('#message').html(`You signed in! Welcome to Hollywood, ${store.user.email}.`)
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
  // $('#message').addClass('success-message')
  // $('#message').removeClass('error-message')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#add-director').removeClass('hidden')
  $('#get-directors').removeClass('hidden')
  $('#edit-director-form').removeClass('hidden')
  $('#delete-director-form').removeClass('hidden')
}

const signInFailure = function (signInFailureResponse) {
  $('#message').show(100)
  $('#message').html('You ruined the shot. Try again.')
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').show(100)
  $('#message').html("You have successfully changed your password. We'll fix that in post.")
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const signOutSuccess = function (signOutResponse) {
  $('#message').show(100)
  $('#message').html("You've signed out...that's a wrap for today")
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
  // $('#message').addClass('success-message')
  // $('#message').removeClass('error-message')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-password').trigger('reset')
  // $('#get-directors').addClass('hidden')
  $('#add-director').addClass('hidden')
  $('#edit-director-form').addClass('hidden')
  $('#delete-director-form').addClass('hidden')
  $('#content').addClass('hidden')
  // $('#edit-director-form').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess
}
