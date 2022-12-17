//saidas e entradas utilizando o process biblioteca nativa do nodejs

const process = require('process');


process.stdout.write('qual seu nome?') //std out, seria uma saida... basicamente faz o mesmo que o console.log()

process.stdin.on('data', (keyboard) => { //std in, seria uma entrada
  process.stdout.write(`Texto do usuário: ${keyboard}`);
  process.exit();
})