const SessionController = require('../../../src/controllers/session-ctrl')

const getReqMock = (body) => {
    return {
        body: body || {}
    }
}

const getResMock = () => {
    return {
        status: (status) => {
            return {
                json: (obj) => {
                    return {
                        data: obj,
                        status
                    }
                } 
            }
        }
    }
}

const getResponses = () => {
    return {
        invalidEmail: {
            message: 'Email is not provided or is invalid'
        },
        invalidPassword: {
            message: 'Password is not provided'
        }
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
})