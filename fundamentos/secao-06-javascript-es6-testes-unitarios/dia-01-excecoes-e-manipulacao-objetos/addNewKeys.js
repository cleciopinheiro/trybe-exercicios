const pessoaEstudante = {};

let key = 'fullName';
const fullName = 'Clécio Santos';

const addNewPropriety = (pessoaEstudante, key, value) => {
    pessoaEstudante[key] = value
}

addNewPropriety(pessoaEstudante, key, fullName);

key = 'age';
const age = 30;

addNewPropriety(pessoaEstudante, key, age);

key = 'city';
const city = 'Rio de Janeiro';

addNewPropriety(pessoaEstudante, key, city);
console.log(pessoaEstudante);