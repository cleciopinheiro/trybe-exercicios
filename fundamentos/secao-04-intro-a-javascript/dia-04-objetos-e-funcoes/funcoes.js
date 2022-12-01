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
