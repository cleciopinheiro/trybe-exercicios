const { restoreFavoriteCards } = require("./favoriteBackup");

const { getMagicCard } = jest.requireActual('../../src/magic');

beforeAll(restoreFavoriteCards);

const saveFavoriteMagicCard = async (cardId) => {
  const cardData = await getMagicCard(cardId);

  favoriteCards.push({...cardData, name: 'Invalid Card Name'});
};

module.exports = {
  saveFavoriteMagicCard,
};
