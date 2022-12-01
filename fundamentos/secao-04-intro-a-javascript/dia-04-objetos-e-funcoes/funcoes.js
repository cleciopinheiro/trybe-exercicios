// Exercício 1
function verifyPalidromo(word) {
    let reverse = word.split('').reverse().join('');
    if (reverse === word) {
        return true;
    } else {
        return false;
    }
}
console.log(verifyPalidromo('arara')); //true
console.log(verifyPalidromo('desenvolvimento')); //false


// Exercício 2
function verifyArray (highest) {
    let high = 0;
    for (let index in highest) {
        if (highest[high] < highest[index]) {
            high = index;
        }
    }
    return high;
}
console.log(verifyArray([2, 3, 6, 7, 10, 1]));


// Exercício 3
function verifyArray (lower) {
    let low = 0;
    for (let index in lower) {
        if (lower[low] > lower[index]) {
            low = index;
        }
    }
    return low;
}
console.log(verifyArray([2, 4, 6, 7, 10, 0, -3]));


// Exercicio 4
function highestCountChar (word) {
    let highWord = word[0];
    for (let index in word) {
        if (highWord.length < word[index].length) {
            highWord = word[index];
        }
    }
    return highWord;
}
console.log(highestCountChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercicio 5
function numberMoreRepeat (number) {
    let
}