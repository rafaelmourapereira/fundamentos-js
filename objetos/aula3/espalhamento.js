const cliente = {
    nome: "Rafael",
    idade: 19,
    email: "rafael@firma.com",
    telefone: ["3326500914", "33589011453"],
};

cliente.endereco; [
{
    rua: "R. Dr Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
];

function LigaParaCliente(telefoneComercial, telefoneResidencial){
    console.log('Ligado para ${telefoneComercial}');
    console.log('${telefoneResidencial}');
}

LigaParaCliente(cliente.telefone[0], cliente.telefone[1]);