const cliente = {
    nome: "Rafael",
    idade: 19,
    email: "rafael@firma.com",
    telefone: ["3326500914", "33589011453"],
};

cliente.endereco = [
{
    rua: "R. Dr Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}