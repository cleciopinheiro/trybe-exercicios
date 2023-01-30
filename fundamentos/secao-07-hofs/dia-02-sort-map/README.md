# Exercícios - agora, a prática
## Instruções para a realização dos exercícios
Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função vazia.

Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.

🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais para você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

## 🚀 Organizando biblioteca
Para os exercícios propostos, use o seguinte template:

```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```
* Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
```
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = () => {
  // escreva seu código aqui
}
```
* Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO
```
const expectedResult = [
  'George R. R. Martin - 1948',
  'J. R. R. Tolkien - 1892',
  'Isaac Asimov - 1920',
  'Frank Herbert - 1920',
  'Stephen King - 1947',
  'H. P. Lovecraft - 1890',
];

const formatedAuthorNamesBirth = () => {
  // escreva seu código aqui
}
```
* Construa um array de objetos a partir do array de livros.
Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha.

```
const expectedResult = [
  {
    author: 'Isaac Asimov',
    age: 31,
  },
  {
    author: 'H. P. Lovecraft',
    age: 38,
  },
  {
    author: 'Stephen King',
    age: 39,
  },
  {
    author: 'George R. R. Martin',
    age: 43,
  },
  {
    author: 'Frank Herbert',
    age: 45,
  },
  {
    author: 'J. R. R. Tolkien',
    age: 62,
  },
];

const nameAndAge = () => {
  // escreva seu código aqui
}
Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA