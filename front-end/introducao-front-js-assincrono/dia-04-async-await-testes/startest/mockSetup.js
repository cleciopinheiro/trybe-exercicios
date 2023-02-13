const data = require('./mockFiles/data');

const ENDPOINT = 'https://api.magicthegathering.io/v1/cards/';

const REQUEST_DELAY = 200;

const fetchSimulator = (url) => {
  if (!url.startsWith(ENDPOINT)) {
    return Promise.reject(new Error(`${url} is not a valid endpoint`));
  }
  const splitUrl = url.split('/');
  const cardId = splitUrl[splitUrl.length - 1];

  const card = data.cards.find((cardItem) => cardItem.multiverseid === cardId);

  if (!card) {
    return Promise.reject(new Error('ID not found'));
  }

  return Promise.resolve({
    json: () => new Promise((resolve) => {
      setTimeout(() => resolve({ card }), REQUEST_DELAY);
    }),
  });
};

jest.mock('node-fetch', () => jest.fn(fetchSimulator));
global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);
