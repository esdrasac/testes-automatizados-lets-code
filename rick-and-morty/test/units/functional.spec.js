const { isPalindrome } = require('../../functional')

describe('Is Palindrome Tests', () => {
    it('Should return true for a valid palindrome', () => {
        const isValid = isPalindrome('arara')
        expect(isValid).toBe(true)
    })

    it('Should return false for an invalid palindrome', () => {
        const isValid = isPalindrome('arar')
        expect(isValid).toBe(false)
    })
})