class Imc {
    static get(weight, height) {    
        return (weight/(height * height)).toFixed(2)
    }
}

module.exports = Imc