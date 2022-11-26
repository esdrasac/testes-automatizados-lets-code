const emailValidator = require('../../../src/utils/validator-email')

describe('Email validator', () => {
    it('Should return false if no email is provided', () => {
        const isValidEmail = emailValidator()

        expect(isValidEmail).toBe(false)
    })

    it('Should return false if provided email is invalid', () => {
        const isValidEmail = emailValidator('esdras.com.br')

        expect(isValidEmail).toBe(false)
    })

    it('Should return true if a valid email is provided', () => {
        const isValidEmail = emailValidator('esdras@lets.com.br')

        expect(isValidEmail).toBe(true)
    })
})