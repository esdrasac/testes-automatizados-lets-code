class Pessoa {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getAge() {
        return this.age
    }

    static getClassInformation() {
        return {
            att: ['name', 'age']
        }
    }
}

const esdras = new Pessoa('Esdras Aguilar', 18)
const carol = new Pessoa('Carol', 20)

console.log(esdras.getAge())
console.log(carol)

console.log(Pessoa.getClassInformation())
