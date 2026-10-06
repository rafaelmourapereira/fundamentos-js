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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log('Ligado para ${telefoneComercial}');
    console.log('${telefoneResidencial}');
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    rua : cliente.endereco[0].rua,
    numero: cliente.endereco[1].numero,
};
console.log(encomenda);
