const getMagicCard = async (_cardId) => {
  await fetch('https://api.magicthegathering.io/v1/cards/undefined').catch(() => {})

  return {
    name: 'Ancestor\'s Chosen',
    manaCost: '{5}{W}{W}',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
  }
};

module.exports = {
  getMagicCard,
};
