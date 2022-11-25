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
console.log(media.toFixed(2));
