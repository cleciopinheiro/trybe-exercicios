require('./mockSetup');

const mocked = require(`./mockFiles/${process.env.mockFileName}`);

jest.mock(`../${process.env.filePath}`, () => mocked);
