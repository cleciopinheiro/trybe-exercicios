// Exercicio 1
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade();


// Exercicio 2
let pessoa = {
nome: 'Henri',
idade: 20
}

pessoa = {
nome: 'Luna',
idade: 19
}
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);


// Exercicio 3
let favoriteFood = 'Lasanha';

favoriteFood = 'Hamburguer';

console.log(favoriteFood);


// Exercicio 4
const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);


// Exercicio 5
const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio());


// Exercicio 6
const hello = (nome) => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));


// Exercicio 7
const nomeCompleto = (nome2, sobrenome) => `${nome2} ${sobrenome}`
let nome2 = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));  


// Exercicio 8
let speed = 90;
const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));  
  