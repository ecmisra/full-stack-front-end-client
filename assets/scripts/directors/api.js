'use strict'

const store = require('../store.js')
const config = require('../config.js')

const getDirectors = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/directors',
    headers: {
      // Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

const addDirector = function (firstName, lastName, bornOn, famousMovies) {
  // console.log(firstName)
  return $.ajax({
    url: config.apiUrl + '/directors',
    method: 'POST',
    headers: {
      // Authorization: `Token token=${store.user.token}`
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'director': {
        'first_name': firstName,
        'last_name': lastName,
        'born_on': bornOn,
        'famous_movies': famousMovies,
        'user_id': store.user.id
      }
    })
  })
}

// {"director":{"id":35,"first_name":"1","last_name":"1","born_on":null,"famous_movies":"1","user_id":8}}
const updateDirector = function (id, firstName, lastName, bornOn, famousMovies) {
  return $.ajax({
    method: 'PATCH',
    // url: config.apiUrl + '/directors',
    url: config.apiUrl + `/directors/` + id,
    headers: {
      // Authorization: `Token token=${store.user.token}`
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'director': {
        'first_name': firstName,
        'last_name': lastName,
        'born_on': bornOn,
        'famous_movies': famousMovies
      }
    })
  })
}

const deleteDirector = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/directors/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getDirectors,
  addDirector,
  updateDirector,
  deleteDirector
}
