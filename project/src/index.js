/**
 * Qual o objetivo:
 *      Calcular IMC
 * Quais os dados de entrada:
 *  * Altura(metros)
 *  * Peso(KG)
 * O que eu preciso fazer com esses dados:
 *  * imc = p / (a * a)
 * Quais as restrições pro meu problema:
 *  * Garantir a unidade a ser utilizada
 *  * O peso e a altura deve ser maior que zero
 * Como(implementação) será resolvido:
 *  Coletar peso e altura do usuário
 *      Validar peso e altura
 * 
 *  Realizar o calculo
 *      imc = p / (a * a)
 * 
 *  Mostrar o resultado
 */
const prompt = require('prompt')
const Imc = require('./services/imc')
const Validator = require('./services/validator')

let run = true

const main = async () => {
    while(run) {
        console.log('--------------- Calculo IMC ---------------')
        console.log('1. Calcular')
        console.log('2. Sair')
        const { option } = await prompt.get(['option'])

        switch (option) {
            case '1':
                console.clear()
                console.log('--------------- Insira seus dados ---------------')
                const { peso } = await prompt.get(['peso'])
                
                if(!Validator.weight(peso)) {
                    await prompt.get(['press'])
                    break
                }

                const { altura } = await prompt.get(['altura'])

                if(!Validator.height(altura)) {
                    await prompt.get(['press'])
                    break
                }

                const imc = Imc.get(peso, altura)
            
                console.clear()
                console.log('--------------- Resultado IMC ---------------')
                console.log(`Seu IMC é ${imc}`)
                await prompt.get(['press'])
                break;
            case '2': 
                run = false
                break;
        }

        console.clear()
    }
}

main()