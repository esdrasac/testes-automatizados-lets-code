const jwt = require('jsonwebtoken')
class SessionService{
    static generateToken(email) {
        return jwt.sign({ email }, 'abc')
    }
}

module.exports = SessionService