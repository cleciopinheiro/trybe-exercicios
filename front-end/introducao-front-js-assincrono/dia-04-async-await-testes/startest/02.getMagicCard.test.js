const { runTestWithMock, execInitialTest } = require('./testRunner');

const magicPath = 'src/magic.js';

describe('2 - Verificando o retorno da função getMagicCard', () => {
  beforeAll(execInitialTest);

  it('2.1 Verifique se a propriedade name retornada pela função getMagicCard possui valor Ancestor\'s Chosen.', async () => {
    await runTestWithMock(
      '2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.',
      '2.1.fakeMagicReturn.js',
      magicPath,
      'A carta retornada não possui o nome Ancestor\'s Chosen.',
      'name: \'Ancestor\'s Chosen\'',
      'name: \'Invalid Card Name\'',
    );
  });
});
