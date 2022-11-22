class ValidatorException extends Error {
    constructor(message) {
        super('Bad Request')
        this.name = 'Validation Fails'
        this.status = 400
        this.message = message
    }
}

module.exports = ValidatorException