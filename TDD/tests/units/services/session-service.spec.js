const User = require('../../../src/models/User')
const SessionService = require('../../../src/services/session-service')

class UserMock {
    static async find({ email }) {
        const users = {
            'esdras@lets.com.br': {
                _id: "63815037f041b254122338c3",
                name: "Esdras Aguilar",
                email: "esdras@lets.com",
                password: "123456"
            }
        }
        
        if(users[email]) {
            return true
        }

        return false
    }
}

describe('Session Service', () => {
    it('Should return true if user exists', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(UserMock.find)
        
        const userExists = await SessionService.userExists('esdras@lets.com.br')

        expect(userExists).toBe(true)
    })

    it('Should return false if user not found', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(UserMock.find)
        
        const userExists = await SessionService.userExists('esdras.nao.existente@lets.com.br')

        expect(userExists).toBe(false)
    })

    it('Should capture if User model throws', async () => {
        jest.spyOn(User, 'find').mockImplementationOnce(() => {
            throw new Error('User model fails')
        })
        
        try {
            await SessionService.userExists('esdras.nao.existente@lets.com.br')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})