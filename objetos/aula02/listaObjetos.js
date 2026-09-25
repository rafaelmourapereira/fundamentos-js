const cliente = {
    nome: "Rafael",
    idade: 19,
    email: "rafael@firma.com",
    telefone: ["3326500914", "33589011453"],
};

cliente.endereco; = [
{
    rua: "R. Dr Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
];

cliente.endereco.push({
    rua: "R. XV de novembro",
    numero: 350,
    apartamento: false,
});

const taApenasApartamentos = cliente.endereco.flitter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApartamentos);