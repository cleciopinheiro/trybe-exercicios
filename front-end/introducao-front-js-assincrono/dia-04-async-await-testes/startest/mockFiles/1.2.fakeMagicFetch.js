const getMagicCard = async (_cardId) => ({
  name: 'Ancestor\'s Chosen',
  manaCost: '{5}{W}{W}',
  types: ['Creature'],
  subtypes: ['Human', 'Cleric'],
  rarity: 'Uncommon',
});

module.exports = {
  getMagicCard,
};
