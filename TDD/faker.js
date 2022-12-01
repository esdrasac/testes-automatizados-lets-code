const { faker } = require('@faker-js/faker')


const obj = {
    name: faker.name.fullName(),
    gender: faker.name.gender(),
    jobArea: faker.name.jobArea(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    domainName: faker.internet.domainName(),
    zipCode: faker.address.zipCode(),
}

console.log(obj)