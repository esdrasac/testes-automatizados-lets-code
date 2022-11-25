const Validator = require('../../../src/services/validator')


describe('Validator tests', () => {
    it('Should returns true for positive numbers', () => {
        const isValidWeight = Validator.weight(80)
        expect(isValidWeight).toBe(true)
    })
    
    it('Should returns false for 0', () => {
        const isValidWeight = Validator.weight(0)
        expect(isValidWeight).toBe(false)
    })
    
    it('Should returns false for negative numbers', () => {
        const isValidWeight = Validator.weight(-1)
        expect(isValidWeight).toBe(false)
    })
    
    it('Should returns true if height is positive', () => {
        const isValidHeight = Validator.height(1.8)
        expect(isValidHeight).toBe(true)
    })

    it('Should returns false if height is 0', () => {
        const isValidHeight = Validator.height(0)
        expect(isValidHeight).toBe(false)
    })

    it('Should returns false if height is negative', () => {
        const isValidHeight = Validator.height(-1)
        expect(isValidHeight).toBe(false)
    })
})
