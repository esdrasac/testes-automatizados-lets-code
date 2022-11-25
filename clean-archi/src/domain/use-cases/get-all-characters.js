class GetAllCharactersUseCase {
    constructor(request) {
        this.request = request
    }

    handle(url) {
        this.request.get()
    }
}

module.exports = GetAllCharactersUseCase

