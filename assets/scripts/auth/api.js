'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      // Authorization: `Token token=${store.user.token}`
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

const changePassword = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      // Authorization: `Token token=${store.user.token}`
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
