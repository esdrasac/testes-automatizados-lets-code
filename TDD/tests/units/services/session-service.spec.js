const SessionService = require('../../../src/services/session-service')

describe('Session Service "generateToken"', () => {
    it('Should returns a jwt token', async () => {
        const token  = await SessionService.generateToken('valid.email@lets.com.br')
        expect(token).toBeTruthy()
    })
})