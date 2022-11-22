const axios = require('axios')

class CharacterService {
    static async getAll() {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        return response.data.results.map(char => {
            return {
                id: char.id,
                name: char.name
            }
        })
    }

    static async getById(id) {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

        return {
            id: data.id,
            name: data.name,
            image: data.image
        }
    }
}

module.exports = CharacterService