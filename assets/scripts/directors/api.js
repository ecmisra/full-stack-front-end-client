'use strict'

const store = require('../store.js')
const config = require('../config.js')

const getDirectors = (data) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/directors',
    headers: {
      // Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

const addDirector = function () {
  return $.ajax({
    url: config.apiUrl + '/directors',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}
// console.log(data)

const updateDirector = function (id, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/directors/${store.game}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': id,
            'value': value
          },
          'over': over
        }
      }
    )
  })
}

module.exports = {
  getDirectors,
  addDirector,
  updateDirector
}
