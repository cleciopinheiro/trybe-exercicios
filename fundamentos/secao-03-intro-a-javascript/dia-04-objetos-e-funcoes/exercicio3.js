// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 20;
let b = 30;

function sum(a, b) {
    return a + b;
}
// console.log(sum(a, b));

function sub(a, b) {
    return a - b;
}
// console.log(sub(a, b));

function mult(a, b) {
    return a * b;
}
// console.log(mult(a, b));

function div(a, b) {
    return a / b;
}
// console.log(mult(a, b));

function mod(a, b) {
    return a % b;
}
// console.log(mod(a, b));


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }



//   Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

  function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
    if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
      return 'O maior número é: ' + primeiroNum;
    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
      return 'O maior número é: ' + segundoNum;
    } else {
      return 'O maior número é: ' + terceiroNum;
    }
  }



//   Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

  function positiveNegative(number) {
    if (number > 0) { // Testa se o número é positivo (maior que 0)
      return 'positive';
    } else if (number < 0) { // Testa se o número é negativo (menor que 0)
      return 'negative';
    } else { // Se nenhum teste passar, o número é igual a 0
      return 'zero';
    }
  }


//   Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

  function triangleAnglesValidate(angleA, angleB, angleC) {
    let sumOfAngles = angleA + angleB + angleC;
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
    if (allAnglesArePositives) {
      if (sumOfAngles === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }

  