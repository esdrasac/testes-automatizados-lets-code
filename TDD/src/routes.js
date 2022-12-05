const { Router } = require('express')
const routes = Router()

const SessionController = require('./controllers/session-ctrl')
const UserController = require('./controllers/user-ctrl')

routes.post('/session', SessionController.create)
routes.post('/user', UserController.create)
routes.put('/password', UserController.changePassword)

module.exports = routes

