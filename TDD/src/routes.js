const { Router } = require('express')
const routes = Router()

const SessionController = require('./controllers/session-ctrl')

routes.post('/session', SessionController.create)

module.exports = routes

