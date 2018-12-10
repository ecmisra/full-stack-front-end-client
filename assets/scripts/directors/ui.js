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
  $('#message2').html('You ruined the shot. Try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const getDirectorsSuccess = function (data) {
  // console.log(data.directors)
  const showDirectorsHtml = showDirectorsTemplate({ directors: data.directors })
  $('.content').html(showDirectorsHtml)
  $('#message').html('Success! Hollywood loves you!')
}

const updateDirectorSuccess = function (updateDirectorResponse) {
  $('#message2').html('You updated the Director.')
  $('#message2').addClass('success-message')
  $('#message2').removeClass('error-message')
  // $('#message').clear()
}

const deleteDirectorSuccess = function (data) {
  // const showDirectorsHtml = showDirectorsTemplate({ directors: data.directors })
  // $('.content').html(showDirectorsHtml)
  $('#message2').html('You left the Director on the cutting room floor.')
  // $('#message').clear()
}

module.exports = {
  addDirectorSuccess,
  addDirectorFailure,
  getDirectorsSuccess,
  updateDirectorSuccess,
  deleteDirectorSuccess
}
