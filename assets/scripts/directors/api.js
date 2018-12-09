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

const addDirector = function (director) {
  return $.ajax({
    url: config.apiUrl + '/directors',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    director: JSON.stringify(director)
  })
}

const updateDirector = function (firstName, lastName, bornOn, famousMovies) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/directors/${store.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'Directors': {
          'id': {
            'first_name': firstName,
            'last_name': lastName,
            'born_on': bornOn,
            'famous_movies': famousMovies
          }
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
