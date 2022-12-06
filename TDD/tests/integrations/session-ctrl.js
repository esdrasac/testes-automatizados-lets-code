const mongoose = require('mongoose')
const { faker } = require('@faker-js/faker')
const User = require('../../src/models/User')
const { getReqMock, getResMock, getResponses } = require('../mocks/session-mocks')
const { generateUserMock } = require('../mocks/users-mock')

const SessionController = require('../../src/controllers/session-ctrl')

const userDataMock = generateUserMock()

describe('[Integration] Session Controller', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb+srv://letscode:letscode@cluster0.nwudzbw.mongodb.net/letscode?retryWrites=true&w=majority')
        await User.create(userDataMock)
    })

    afterAll(async () => {
        await User.deleteMany({})
        mongoose.connection.close()
    })

    it('Should return status 400 if email is not provided', async () => {
        const req = getReqMock()
        const res = getResMock()

        const { invalidEmail } = getResponses()

        const response = await SessionController.create(req, res)
        
        expect(response.status).toBe(400)
        expect(response.data).toMatchObject(invalidEmail)
    })
    
    it('Should return status 400 for invalid email', async () => {
        const req = getReqMock({
            email: faker.internet.domainName(),
        })
        
        const res = getResMock()
        
        const { invalidEmail } = getResponses()

        const response = await SessionController.create(req, res)
        
        expect(response.status).toBe(400)
        expect(response.data).toMatchObject(invalidEmail)
    })

    it('Should return status 400 if password is not provided', async () => {
        const req = getReqMock({
            email: faker.internet.email(),
        })

        const { invalidPassword } = getResponses()

        const res = getResMock()

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(400)
        expect(response.data).toMatchObject(invalidPassword)
    })

    it('Should return status 401 if user does not exists', async () => {
        const req = getReqMock({
            email: faker.internet.email(),
            password: faker.internet.password()
        })

        const { invalidCredentials } = getResponses()

        const res = getResMock()

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(401)
        expect(response.data).toMatchObject(invalidCredentials)
    })

    it('Should return status 401 if pasword does not match', async () => {
        const req = getReqMock({
            email: userDataMock.email,
            password: faker.internet.password()
        })

        const { invalidCredentials } = getResponses()

        const res = getResMock()

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(401)
        expect(response.data).toMatchObject(invalidCredentials)
    })

    it('Should return status 401 if pasword does not match', async () => {
        const req = getReqMock(userDataMock)

        const res = getResMock()

        const response = await SessionController.create(req, res)

        expect(response.status).toBe(200)
        expect(response.data).toHaveProperty('token')
    })
})