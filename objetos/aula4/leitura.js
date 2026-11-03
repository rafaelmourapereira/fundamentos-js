const dados = require("./clinte.json");

console.log(dados);
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);

console.log(clienteEmString.nome);