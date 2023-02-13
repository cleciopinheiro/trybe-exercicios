const { runTestWithMock, execInitialTest } = require('./testRunner');

const magicPath = 'src/magic.js';

describe('1 - Implemente os testes da função getMagicCard', () => {
  beforeAll(execInitialTest);

  it('1.1 Verifique se getMagicCard é uma função.', async () => {
    await runTestWithMock(
      '1.1 Verifique se getMagicCard é uma função.',
      '1.1.fakeMagicString.js',
      magicPath,
      'A getMagicCard não é uma função.',
      'function',
      'Invalid type',
    );
  });

  it('1.2 Verifique se, ao chamar a função getMagicCard, a função fetch foi chamada.', async () => {
    await runTestWithMock(
      '1.2 Verifique se a função fetch foi chamada.',
      '1.2.fakeMagicFetch.js',
      magicPath,
      'A função fetch não foi chamada',
    );
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550".', async () => {
    await runTestWithMock(
      '1.3 Verifique se a função fetch foi chamada com o endpoint correto',
      '1.3.fakeMagicParam.js',
      magicPath,
      'A função fetch foi chamada com o endpoint errado.',
      'https://api.magicthegathering.io/v1/cards/130550',
      'https://api.magicthegathering.io/v1/cards/undefined',
    );
  });
});
