'use strict'

const showDirectorsTemplate = require('../templates/helpers/directors-listing.handlebars')
const store = require('./../store.js')

const addDirectorSuccess = function (addDirectorResponse) {
  store.user = addDirectorResponse.user
  $('#message').html('Director added!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const addDirectorFailure = function (addDirectorFailureResponse) {
  $('#message').html('You ruined the shot. Try again.').fadeOut(3000)
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const getDirectorsSuccess = function (data) {
  // console.log(data.directors)
  const showDirectorsHtml = showDirectorsTemplate({ directors: data.directors })
  $('.content').html(showDirectorsHtml)
  // $('#directors').html('list of directors')
}

const updateDirectorSuccess = function (updateDirectorResponse) {
  $('#message').html('You updated the Director.').fadeOut(3000)
}

module.exports = {
  addDirectorSuccess,
  addDirectorFailure,
  getDirectorsSuccess,
  updateDirectorSuccess
}
