const User = require('../models/User')

class UserService{
    static async userExists(email) {
        const user = await User.findOne({ email })
        
        if(user) {
            return true
        }

        return false
    }

    static async checkPassword(email, password) {
        const user = await User.findOne({ email })

        if(!user) {
            return false
        }
        
        return user.password === password
    }
}

module.exports = UserService