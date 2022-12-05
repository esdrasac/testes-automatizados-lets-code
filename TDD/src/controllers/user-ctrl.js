const emailValidator = require('../utils/validator-email')
const UserService = require('../services/user-service')

class UserController {
    static async create(req, res) {
        try {
            const { name, email, password} = req.body

            if(!emailValidator(email)) {
                return res.status(400).json({ message: 'Email is not provided or is invalid' })
            }
    
            if(!password) {
                return res.status(400).json({ message: 'Password is not provided' })
            }
    
            const user = await UserService.create({ name, email, password })
    
            return res.status(200).json({
                user
            })
        } catch (error) {
            return res.status(error.status || 500).json({ message: error.message })
        }

    }

    static async changePassword(req, res) {
        try {
            const { email, oldPassword, newPassword, confirmPassword} = req.body

            if(!emailValidator(email)) {
                return res.status(400).json({ message: 'Email is not provided or is invalid' })
            }
    
            if(!oldPassword || !newPassword || !confirmPassword) {
                return res.status(400).json({ message: 'Password is not provided' })
            }

            if(!await UserService.checkPassword(email, oldPassword)) {
                return res.status(401).json({ message: 'Credenciais inválidas'})
            }

            await UserService.updatePassword(email, newPassword, confirmPassword)
    
            return res.status(200).json({
                message: 'ok'
            })
        } catch (error) {
            return res.status(error.status || 500).json({ message: error.message })
        }

    }
}

module.exports = UserController