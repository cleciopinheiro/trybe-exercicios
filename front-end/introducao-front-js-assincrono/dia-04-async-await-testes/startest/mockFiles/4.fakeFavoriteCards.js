const favoriteCards = [];

for (let i = 0; i < 4; i++) {
  favoriteCards.push({
    name: `Invalid Card ${i}`,
    manaCost: `{${i}}{${i}}`,
    types: ['Creature'],
    subtypes: ['Human', 'Cleric'],
    rarity: 'Uncommon',
  });
}

module.exports = favoriteCards;
