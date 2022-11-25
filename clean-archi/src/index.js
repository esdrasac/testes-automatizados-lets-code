const GetChars = require('./domain/use-cases/get-all-characters')

const request1 = {
    get: () => console.log('Eu sou o axios')
}

const request2 = {
    get: () => console.log('Eu sou o Fetch')
}
const getChars = new GetChars(request2)


getChars.handle()