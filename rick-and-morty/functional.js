// const getDate = (dateFn) => new dateFn()

// const sum = (a, b) => a + b

// console.log(getDate(Date))
// console.log(sum(2, 2))


/**
 * Crie uma função que verifique se um palavra é um palindromo
 */


// function isPalindrome(word) {
//     const splittedWord = word.split('')
//     let invertedWord = ''

//     for(let i = splittedWord.length - 1; i >= 0; i-- ) {
//         invertedWord += splittedWord[i]
//     }

//     if(invertedWord === word) {
//         return true
//     } else {
//         return false
//     }
// }

exports.isPalindrome = (word) => word.split('').reverse().join('') === word
