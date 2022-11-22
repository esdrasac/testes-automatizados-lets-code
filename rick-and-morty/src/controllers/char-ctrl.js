const yup = require('yup')
const CharacterService = require('../services/character.service')
const ValidatorException = require('../utils/errors/Validator-exception')
const { success, serverError } = require('../utils/http-response')


class CharController {
    static async getAll(req, res) {
        try {
            const chars = await CharacterService.getAll()
            success(res, chars)
        } catch (error) {
            serverError(res, error)
        }
    }

    static async getById(req, res) {
        try {
            // const params = req.params.id
            const { params } = req
            
            const schema = yup.object().shape({
                id: yup.number().required()
            })
    
            if(!await schema.isValid(params)) {
                throw new ValidatorException('Validation Fails')
            }
    
            const char = await CharacterService.getById(params.id)
    
            success(res, chars)
        } catch (error) {
            console.log(error)
            serverError(res, error)
        }
    }
}

module.exports = CharController