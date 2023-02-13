const favoriteCards = require('../src/data/favoriteCards');
const fakeFavoriteCards = require('./mockFiles/4.fakeFavoriteCards');
const { runTestWithMock, execInitialTest } = require('./testRunner');

describe('4 - Verifique os nomes das cartas favoritas', () => {
  beforeAll(execInitialTest);

  it('4.1 Implemente um teste que verifique que o array que você obteve com o map contém todos os 4 nomes corretos', async () => {
    await runTestWithMock(
      '4 - Testes da função saveFavoriteMagicCard',
      '4.fakeFavoriteCards.js',
      'src/data/favoriteCards.js',
      'Todas as cartas estão com nomes incorretos',
      `Cards: ${favoriteCards.map(card => card.name)}`,
      `Cards: ${fakeFavoriteCards.map(card => card.name)}`,
    );
  });
});
