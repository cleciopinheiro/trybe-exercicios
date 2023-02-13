const getMagicCard = async (cardId) => {
  await fetch(`https://api.magicthegathering.io/v1/cards/${cardId}`).catch(() => {});

  return {
    name: 'Invalid Card Name',
    manaCost: '{5}{W}{W}',
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
  }
};

module.exports = {
  getMagicCard,
};
