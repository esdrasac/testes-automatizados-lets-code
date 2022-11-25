const axios = require('axios')
const CharacterService = require('../../src/services/character.service')
const { getAllCharactersMock } = require('../mocks/characters-mocks')

// jest.mock('axios')

// describe('Characters Services Tests', () => {
//     it('Should return an array of characters', async () => {
//         const charMock = getAllCharactersMock()
//         axios.get.mockResolvedValueOnce(charMock)

//         const data = await CharacterService.getAll()
        
//         expect(data).toMatchObject(charMock.data.results)
//     })
// })


const charMock = getAllCharactersMock()

const AxiosMock = class Axios {
    get() {
        return charMock
    }
}

describe('Characters Services Tests', () => {
    it('Should return an array of characters', async () => {
        const axiosMock = new AxiosMock()
        
        const spy = jest.spyOn(axios, 'get').mockImplementationOnce(axiosMock.get)
        
        const data = await CharacterService.getAll()

        expect(data).toMatchObject(charMock.data.results)
        expect(spy).toHaveBeenLastCalledWith('https://rickandmortyapi.com/api/character')
    })
    
    it('Should return an array of characters', async () => {
        const axiosMock = new AxiosMock()
        
        const spy = () => jest.spyOn(axios, 'get').mockImplementationOnce(() => {
            throw new Error()
        })

        const data = await CharacterService.getAll()
        expect(spy()).toThrow()
    })
})
