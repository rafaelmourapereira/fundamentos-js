const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é $ {cliente.nome} e essa pessoa tem {cliente.idade} anos.`);
console.log(`Os 3 primeiros digitos dos CPF são ${cliente.cpf.substraing(0, 3)}`);