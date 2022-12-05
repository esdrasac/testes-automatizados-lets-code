const User = require('../models/User')

class UserService{
    static async create(user) {
        if(await UserService.userExists(user.email)) {
            throw { status: 404, message: 'User Already exists' }
        }

        return await User.create(user)
    }

    static async updatePassword(email, newPassword, confirmPassword) {
        if(!await UserService.userExists(email)) {
            throw { status: 404, message: 'User Not Found' }
        }
        if(newPassword !== confirmPassword) {
            throw { status: 400, message: 'Password does not match' }
        }

        return await User.updateOne({email}, {
            password: newPassword
        })
    }

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