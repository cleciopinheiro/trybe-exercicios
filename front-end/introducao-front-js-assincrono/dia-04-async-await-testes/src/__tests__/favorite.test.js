const { saveFavoriteMagicCard } = require('../magic');
const favoriteCards = require('../data/favoriteCards');

const restoreFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length);
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions();
    await saveFavoriteMagicCard('130553');

    // Você também pode utilizar o matcher `toHaveLength`
    // expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');

    await saveFavoriteMagicCard('130554');

    expect(favoriteCards.length).toBe(6);
  });

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions();
    expect(favoriteCards).toHaveLength(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    expect.assertions();

    const expected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    const actual = favoriteCards.map((card) => card.name);

    expect(actual).toEqual(expected);
  });
});
