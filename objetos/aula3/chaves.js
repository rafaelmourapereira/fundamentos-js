const cliente = {
    nome: "Rafael",
    idade: 19,
    email: "rafael@firma.com",
    telefone: ["3326500914", "33589011453"],
};
/*
cliente.endereco; [
{
    rua: "R. Dr Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
];
*/

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.log("Erro. É necessário ter um endereço cadastrado.");
}