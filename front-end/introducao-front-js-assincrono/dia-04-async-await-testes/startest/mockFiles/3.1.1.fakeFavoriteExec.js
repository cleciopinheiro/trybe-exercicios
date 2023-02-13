const { restoreFavoriteCards } = require("./favoriteBackup");

const { getMagicCard } = jest.requireActual('../../src/magic');

beforeAll(restoreFavoriteCards);

const saveFavoriteMagicCard = async (cardId) => {
  await getMagicCard(cardId);
};

module.exports = {
  saveFavoriteMagicCard,
};
