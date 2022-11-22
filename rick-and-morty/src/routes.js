const { Router } = require('express')
const CharacterController = require('./controllers/char-ctrl')

const routes = new Router()

routes.get('/characters', CharacterController.getAll)
routes.get('/characters/:id', CharacterController.getById)


module.exports = routes