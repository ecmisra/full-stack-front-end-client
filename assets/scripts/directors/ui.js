'use strict'

const showDirectorsTemplate = require('../templates/helpers/directors-listing.handlebars')
const store = require('./../store.js')

const addDirectorSuccess = function (addDirectorResponse) {
  store.user = addDirectorResponse.user
  $('#message').show(100)
  $('#message').html('Director added!')
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
  // $('#message').addClass('success-message')
  // $('#message').removeClass('error-message')
}

const addDirectorFailure = function (addDirectorFailureResponse) {
  $('#message').show(100)
  $('#message').html('You ruined the shot. Try again.')
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
  // $('#message').removeClass('success-message')
  // $('#message').addClass('error-message')
}

const getDirectorsSuccess = function (data) {
  // console.log(data.directors)
  const showDirectorsHtml = showDirectorsTemplate({ directors: data.directors })
  $('.content').html(showDirectorsHtml)
  $('#message').show(100)
  $('#message').html('Success! Hollywood loves you!')
  setTimeout(function () {
    $('#message').fadeOut(200).empty(200)
  }, 2500)
}

const updateDirectorSuccess = function (updateDirectorResponse) {
  $('#message').show(100)
  $('#message2').html('You updated the Director.')
  setTimeout(function () {
    $('#message2').fadeOut(200).empty(200)
  }, 2500)
  $('#message2').addClass('success-message')
  $('#message2').removeClass('error-message')
  // $('#message').clear()
}

const deleteDirectorSuccess = function (data) {
  $('#message').show(100)
  $('#message2').html('You left the Director on the cutting room floor.')
  setTimeout(function () {
    $('#message2').fadeOut(200).empty(200)
  }, 2500)
  // $('#message').html('You left the Director on the cutting room floor.')
  // $('#message').clear()
}

module.exports = {
  addDirectorSuccess,
  addDirectorFailure,
  getDirectorsSuccess,
  updateDirectorSuccess,
  deleteDirectorSuccess
}
