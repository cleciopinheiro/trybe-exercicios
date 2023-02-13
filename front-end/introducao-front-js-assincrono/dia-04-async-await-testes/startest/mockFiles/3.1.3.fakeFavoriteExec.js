const { restoreFavoriteCards } = require("./favoriteBackup");

const { getMagicCard } = jest.requireActual('../../src/magic');

beforeAll(restoreFavoriteCards);

let isFirstTime = true;

const saveFavoriteMagicCard = async (cardId) => {
  const cardData = await getMagicCard(cardId);

  if (isFirstTime) favoriteCards.push(cardData);
  isFirstTime = false;
};

module.exports = {
  saveFavoriteMagicCard,
};
