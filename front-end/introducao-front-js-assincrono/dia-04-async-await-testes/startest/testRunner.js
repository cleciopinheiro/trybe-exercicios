const util = require('util');

const exec = util.promisify(require('child_process').exec);

const NPM_TEST = 'npm run test:dev';
const DEFAULT_ARGS = '--watchAll=false --json --testFailureExitCode=0';
const SETUP_ARG = '--setupFilesAfterEnv "<rootDir>/startest/jestSetup.js"';

function getJsonOutput({ stdout }) {
  return JSON.parse(stdout.replace(/(\n|.)*\n\n({.*}).*/, '$2'));
}

function getFailedTest({ testResults }) {
  return testResults.find(({ status }) => status === 'failed')
    .message;
}

let lastTestResult;

async function execInitialTest() {
  const testResult = lastTestResult || await exec(`${NPM_TEST} -- ${DEFAULT_ARGS}`)
    .then(getJsonOutput)
    .catch((err) => {
      throw new Error(`🚨 Teste inicial falhou 🚨\n\n${err.message}`);
    });

  lastTestResult = testResult;

  if (testResult.numTotalTests === testResult.numPendingTests) {
    throw new Error('⏩ Não há testes para serem executados.⏩');
  }

  if (testResult.numFailedTests > 0) {
    const message = [
      '🚨 Um ou mais testes falharam na inicialização.',
      '🚨 Verifique se os testes estão funcionando corretamente com "npm run test:dev".',
      '',
      getFailedTest(testResult),
    ].join('\n');
    throw new Error(message);
  }
}

async function runTestWithMock(spec, mockFileName, filePath, errorMsg, originalValue, receivedValue) {
  const testCommand = `${NPM_TEST} -- -t "${spec}" ${DEFAULT_ARGS} ${SETUP_ARG}`;

  const result = await exec(testCommand, { env: { ...process.env, mockFileName, filePath } })
    .then(getJsonOutput)
    .catch((err) => {
      throw new Error(`🚨 Teste inicial falhou 🚨\n\n${err.message}`);
    });

  // Se está vendo essa mensagem, significa que seu teste não está testando algo corretamente.
  if (result.numFailedTests === 0) throw new Error(`Verifique se você está testando o requisito corretamente

Um mutante sobreviveu ao teste:
\x1b[33m${errorMsg}${originalValue ? `\n\n\x1b[37mValor original: \x1b[31m${originalValue}` : ''}${receivedValue ? `\n\x1b[37mMutante gerado: \x1b[32m${receivedValue}` : ''}
\x1b[0m`);
}

jest.setTimeout(30000);

module.exports = {
  runTestWithMock,
  execInitialTest,
};
