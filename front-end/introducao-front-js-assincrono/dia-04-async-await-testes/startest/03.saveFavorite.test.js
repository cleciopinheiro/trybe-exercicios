const { runTestWithMock, execInitialTest } = require('./testRunner');

const magicPath = 'src/magic.js';

describe('3 - Implemente os testes da função saveFavoriteMagicCard', () => {
  beforeAll(execInitialTest);

  describe('Implemente um teste que verifique que após a execução da função saveFavoriteMagicCard', () => {
    it('3.1.1 favoriteCards passa a possuir length === 5.', async () => {
      await runTestWithMock(
        '3.1 Testa se um novo card é adicionado a cada execução',
        '3.1.1.fakeFavoriteExec.js',
        magicPath,
        'favoriteCards não possui length === 5.',
        'length === 5',
        'length === 4',
      );
    });

    it('3.1.2 No mesmo it, verifique se a última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality"', async () => {
      await runTestWithMock(
        '3.1 Testa se um novo card é adicionado a cada execução',
        '3.1.2.fakeFavoriteExec.js',
        magicPath,
        'A última posição não é um card com o name "Beacon of Immortality"',
        'name: \'Beacon of Immortality\'',
        'name: \'Invalid Card Name\'',
      );
    });

    it('3.1.3 No mesmo it após chamar a função saveFavoriteMagicCard com o argumento "130554", verifique se favoriteCards passa a possuir length === 6', async () => {
      await runTestWithMock(
        '3.1 Testa se um novo card é adicionado a cada execução',
        '3.1.3.fakeFavoriteExec.js',
        magicPath,
        'favoriteCards não possui length === 6.',
        'length === 6',
        'length === 5',
      );
    });
  });

  it('3.2 Implemente a função restoreFavoriteCards que deverá restaurar o array de favoriteCards ao seu valor original', async () => {
    await runTestWithMock(
      '3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais',
      '3.2.fakeFavoriteRestore.js',
      magicPath,
      'favoriteCards não possui length === 4 após a chamada da função restoreFavoriteCards.',
      'length === 4',
      'length === 5',
    );
  })
});
