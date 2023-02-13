const { restoreFavoriteCards } = require("./favoriteBackup");

const originalModule = jest.requireActual('../../src/magic');

beforeEach(() => {
  restoreFavoriteCards({
    name: 'Invalid Card Name',
    manaCost: '{5}{W}{W}',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
  });
});

module.exports = originalModule;
