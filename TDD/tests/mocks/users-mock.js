const { faker } = require('@faker-js/faker')

exports.generateUserMock = () => {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}