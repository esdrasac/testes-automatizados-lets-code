const emailValidator = require('../../../src/services/email-validator')


describe('Email validator tests', () => {
    it('Should returns true if email is valid', () => {
        const isValidEmail = emailValidator('esdras@letscode.com')
        expect(isValidEmail).toBe(true)
    })

    it('Should returns false if email is not valid', () => {
        const isValidEmail = emailValidator('esdrasletscode.com')
        expect(isValidEmail).toBe(false)
    })
})