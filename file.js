//manipulando arquivos
const fs = require('fs')

//criando um arquivo
fs.writeFile('test.txt', 'Olá NodeJS', err => {
  console.log(err)
})
//adicionando ao arquivo
 fs.appendFile('test.txt', '\nTudo Bem NodeJS?', err => {
   console.log(err)
  })
//'write file': escrever arquivo(cuidado ao usar em arquivo existente, irá reescrever o arquivo). 
//'apeend file' ele Adiciona/Concatena ao arquivo.


fs.rename('test.txt', 'renomeado.txt', err => console.log(err)) // ---- vai renomear um arquivo
// fs.unlink('nome arquivo', err => console.log(err))  ---- vai excluir um arquivo


