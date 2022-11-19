class Validator {
    static weight(weight) {
        if(weight <= 0) {
            console.error('[Atenção] Peso inválido')
            return false
        }

        return true
    }

    static height(height) {
        if(height <= 0) {
            console.error('[Atenção] Altura inválida')
            return false
        }

        return true
    }
}

module.exports = Validator