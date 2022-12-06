const mongoose = require('mongoose')
const request = require('supertest')
const { faker } = require('@faker-js/faker')

const User = require('../../src/models/User')
const app = require('../../src/app')
const { getResponses } = require('../mocks/session-mocks')
const { generateUserMock } = require('../mocks/users-mock')

const userDataMock = generateUserMock()

describe('[E2E] Session Create', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb+srv://letscode:letscode@cluster0.nwudzbw.mongodb.net/letscode?retryWrites=true&w=majority')
        await User.create(userDataMock)
    })

    afterAll(async () => {
        await User.deleteMany({})
        await mongoose.connection.close()
    })

    it('Should return 400 if no email is provided', async () => {
        const res = await request(app)
            .post('/session')
            .send({})

        const { invalidEmail } = getResponses()
        
        expect(res.status).toBe(400)
        expect(res.body).toMatchObject(invalidEmail)
    })

    it('Should return 400 if an invalid email is provided', async () => {
        const res = await request(app)
            .post('/session')
            .send({
                email: faker.internet.domainName()
            })

            const { invalidEmail } = getResponses()
            
            expect(res.status).toBe(400)
            expect(res.body).toMatchObject(invalidEmail)
    })

    it('Should return 400 if no password is provided', async () => {
        const res = await request(app)
            .post('/session')
            .send({
                email: faker.internet.email(),
            })
        
        const { invalidPassword } = getResponses()

        expect(res.status).toBe(400)
        expect(res.body).toMatchObject(invalidPassword)
    })

    it('Should return 401 if user does not exists', async () => {
        const res = await request(app)
            .post('/session')
            .send({
                email: faker.internet.email(),
                password: faker.internet.password()
            })
        
        const { invalidCredentials } = getResponses()

        expect(res.status).toBe(401)
        expect(res.body).toMatchObject(invalidCredentials)
    })

    it('Should return 401 if password does not match', async () => {
        const res = await request(app)
            .post('/session')
            .send({
                email: userDataMock.email,
                password: faker.internet.password()
            })
        
        const { invalidCredentials } = getResponses()

        expect(res.status).toBe(401)
        expect(res.body).toMatchObject(invalidCredentials)
    })

    it('Should return 200 for valid credentials', async () => {
        const res = await request(app)
            .post('/session')
            .send(userDataMock)
        
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('token')
    })
})