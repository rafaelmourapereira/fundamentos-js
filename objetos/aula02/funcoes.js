const cliente = {
    nome: "Rafael",
    idade: 18,
    email: "rafael@firma.com",
    telefone: ["3326500914", "33589011453"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(250);