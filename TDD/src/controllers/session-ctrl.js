const emailValidator = require('../utils/validator-email')
const UserService = require('../services/user-service')
const SessionService = require('../services/session-service')
class SessionController {
    static async create(req, res) {
        const { email, password} = req.body

        if(!emailValidator(email)) {
            return res.status(400).json({ message: 'Email is not provided or is invalid' })
        }

        if(!password) {
            return res.status(400).json({ message: 'Password is not provided' })
        }

        if(!await UserService.userExists(email) || !await UserService.checkPassword(email, password)) {
            return res.status(401).json({ message: 'Credenciais inválidas'})
        }

        const token = SessionService.generateToken(email)

        return res.status(200).json({
            token
        })
    }
}

module.exports = SessionController