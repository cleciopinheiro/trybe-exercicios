// Percorra o `array` imprimindo todos os valores nele contidos com a função `console.log()`;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    // console.log(numbers[index]);
}


// Some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
// console.log(sum);


// Calcule e imprima a média aritmética dos valores contidos no array;
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
    media += numbers[index] / numbers.length;
}
if (media > 20) {
    // console.log('valor maior que 20');
} else {
    // console.log('valor menor ou igual a 20');
}


// Utilizando `for`, descubra qual o maior valor contido no array e imprima-o;
let highNumber = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
        highNumber = numbers[index];
    }
}
// console.log(highNumber);


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let cont = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        cont += 1;
    }
}

if (cont === 0) {
    // console.log('nenhum valor ímpar encontrado');
} else {
    // console.log(cont);
}


// Utilizando `for`, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
// console.log(array);


// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
}
