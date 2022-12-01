const User = require('../../../src/models/User')
const UserService = require('../../../src/services/user-service')

class UserMock {
    static async findOne({ email }) {
        const users = {
            'esdras@lets.com.br': {
                _id: "63815037f041b254122338c3",
                name: "Esdras Aguilar",
                email: "esdras@lets.com",
                password: "123456"
            }
        }
        
        if(users[email]) {
            return users[email]
        }

        return null
    }
}

describe('User Service "userExists"', () => {
    it('Should return true if user exists', async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(UserMock.findOne)
        
        const userExists = await UserService.userExists('esdras@lets.com.br')

        expect(userExists).toBe(true)
    })

    it('Should return false if user not found', async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(UserMock.findOne)
        
        const userExists = await UserService.userExists('esdras.nao.existente@lets.com.br')

        expect(userExists).toBe(false)
    })

    it('Should capture if User model throws', async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(() => {
            throw new Error('User model fails')
        })
        
        try {
            await UserService.userExists('esdras.nao.existente@lets.com.br')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})

describe('User Service "checkPassword"', () => {
    it('Should returns false if password does not match', async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(UserMock.findOne)

        const isValidPassword = await UserService.checkPassword('esdras@lets.com.br', '123455')

        expect(isValidPassword).toBe(false)
    }) 

    it('Should returns false user not found', async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(UserMock.findOne)

        const isValidPassword = await UserService.checkPassword('invalid@lets.com.br', '123456')

        expect(isValidPassword).toBe(false)
    })

    it('Should returns true if password is valid', async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(UserMock.findOne)

        const isValidPassword = await UserService.checkPassword('esdras@lets.com.br', '123456')

        expect(isValidPassword).toBe(true)
    })
})