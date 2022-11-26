const User = require('../models/User')

class SessionService{
    static async userExists(email) {
        const user = await User.find({ email })
        
        if(user) {
            return true
        }

        return false
    }
}

module.exports = SessionService