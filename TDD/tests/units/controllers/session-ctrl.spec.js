const SessionController = require('../../../src/controllers/session-ctrl')
const UserService = require('../../../src/services/user-service')
const { getReqMock, getResMock, getResponses } = require('../../mocks/session-mocks')

class UserServiceMock {
    static async userExists(email) {        
        if(email === 'valid.email@lets.com.br') {
            return true
        } else {
            return false
        }
    }

    static async checkPassword(email, password) {
        return password === '123456'
    }
}

describe('Session Controller', () => {
    it('Should return status 400 if no email is provided', async () => {
        const req = getReqMock()

        const res = getResMock()
        const { invalidEmail } = getResponses()   

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(400)
        expect(response.data).toMatchObject(invalidEmail)        
    })

    it('Should return status 400 if an invalid email is provided', async () => {
        const req = getReqMock({ email: 'esdras.com.br'})

        const res = getResMock()
        const { invalidEmail } = getResponses()   

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(400)
        expect(response.data).toMatchObject(invalidEmail)        
    })

    it('Should return status 400 if no password is provided', async () => {
        const req = getReqMock({ email: 'esdras@lets.com.br'})

        const res = getResMock()
        const { invalidPassword } = getResponses()   

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(400)
        expect(response.data).toMatchObject(invalidPassword)        
    })

    it('Should return status 401 if user does not exist', async () => {
        jest.spyOn(UserService, 'userExists').mockImplementationOnce(UserServiceMock.userExists)

        const req = getReqMock({ email: 'esdras@lets.com.br', password: '123456' })

        const res = getResMock()
        const { invalidCredentials } = getResponses()   

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(401)
        expect(response.data).toMatchObject(invalidCredentials)        
    })

    it('Should return status 401 if password does not match', async () => {
        jest.spyOn(UserService, 'userExists').mockImplementationOnce(UserServiceMock.userExists)
        jest.spyOn(UserService, 'checkPassword').mockImplementationOnce(UserServiceMock.checkPassword)

        const req = getReqMock({ email: 'valid.email@lets.com.br', password: '123455' })

        const res = getResMock()
        const { invalidCredentials } = getResponses()   

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(401)
        expect(response.data).toMatchObject(invalidCredentials)        
    })

    it('Should return status 200 if email and password is valid', async () => {
        jest.spyOn(UserService, 'userExists').mockImplementationOnce(UserServiceMock.userExists)
        jest.spyOn(UserService, 'checkPassword').mockImplementationOnce(UserServiceMock.checkPassword)

        const req = getReqMock({ email: 'valid.email@lets.com.br', password: '123456' })

        const res = getResMock()

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(200)
        expect(response.data).toHaveProperty('token')        
    })
})