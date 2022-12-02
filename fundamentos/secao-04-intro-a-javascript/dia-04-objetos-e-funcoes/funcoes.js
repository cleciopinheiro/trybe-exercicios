// Exercício 1:
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


// Exercício 2:
function verifyArray(highest) {
    let high = 0;
    for (let index in highest) {
        if (highest[high] < highest[index]) {
            high = index;
        }
    }
    return high;
}
console.log(verifyArray([2, 3, 6, 7, 10, 1]));


// Exercício 3:
function verifyArray(lower) {
    let low = 0;
    for (let index in lower) {
        if (lower[low] > lower[index]) {
            low = index;
        }
    }
    return low;
}
console.log(verifyArray([2, 4, 6, 7, 10, 0, -3]));


// Exercicio 4:
function highestCountChar(word) {
    let highWord = word[0];
    for (let index in word) {
        if (highWord.length < word[index].length) {
            highWord = word[index];
        }
    }
    return highWord;
}
console.log(highestCountChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercicio 5:
function numberMoreRepeat(number) {
    let countRepeat = 0;
    let countNumber = 0;
    let indexNumberRepeat = 0;

    for (let index in number) {
        let verifyNumber = number[index];
        for (let indexTwo in number) {
            if (verifyNumber === number[indexTwo]) {
                countNumber += 1;
            }
        }
        if (countNumber > countRepeat) {
            countRepeat = countNumber;
            indexNumberRepeat = index;
        }
        countNumber = 0;
    }
    return number[indexNumberRepeat];
}
console.log(numberMoreRepeat([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6:
function sumNumber(number) {
    let result = 0;
    for (let index = 1; index <= number; index += 1) {
        result += index;
    }
    return result;
}
console.log(sumNumber(5));

// Exercício 7:
function verifyEndWord(word, ending) {
    let reverseWord = word.split('').reverse().join('');
    let reverseEndWord = ending.split('').reverse().join('');
    let result;

    for (let index = 0; index < reverseEndWord.length; index += 1) {
        if (reverseWord[index] !== reverseEndWord[index]) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}
console.log(verifyEndWord('trybe', 'be'));
console.log(verifyEndWord('joaofernando', 'fernan'));