const emailValidator = require('../utils/validator-email')
const setResponse = require('../utils/http-response')

class SessionController {
    static async create(req, res) {
        const { email, password} = req.body

        if(!emailValidator(email)) {
            return res.status(400).json({ message: 'Email is not provided or is invalid' })
        }

        if(!password) {
            return res.status(400).json({ message: 'Password is not provided' })
        }
    }
}

module.exports = SessionController