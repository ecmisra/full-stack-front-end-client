// const getFormFields = require(`/../../../lib/get-form-fields.js`)
//
// const api = require('/../auth/api.js')
// const ui = require('/ui.js')
//
// const onSignUp = function (event) {
//   event.preventDefault()
//   // console.log('sign up ran!')
//
//   const data = getFormFields(event.target)
//   $(event.target).trigger('reset')
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   // console.log('sign in ran!')
//   const data = getFormFields(event.target)
//   $(event.target).trigger('reset')
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   // console.log('sign out ran')
//   $(event.target).trigger('reset')
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   // console.log('change password ran!')
//
//   const data = getFormFields(event.target)
//   $(event.target).trigger('reset')
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.signInFailure)
// }
//
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp)
//   $('#sign-in').on('submit', onSignIn)
//   $('#sign-out').on('submit', onSignOut)
//   $('#change-password').on('submit', onChangePassword)
// }
//
// module.exports = {
//   addHandlers,
//   onSignUp,
//   onSignIn,
//   onChangePassword,
//   onSignOut
// }
