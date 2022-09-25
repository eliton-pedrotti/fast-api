const { database } = require("../models/database");
const { formaPagamento } = require("../models/formaPagamento");

function execute(user, msg) {

    if (msg === "cancelar" || msg === "Cancelar" || msg === "CANCELAR") {
        database[user].stage = 0;
        return ["Atendimento cancelado com sucesso"];
    }

    if (msg === "ok" || msg === "OK" || msg === "Ok") {
        return ["Escolha a forma de pagamento:\n1️⃣-Dinheiro\n2️⃣-Cartão\n3️⃣-PIX"];
    }

    if (!formaPagamento[msg]) {
        return ["Código inválido, digite corretamente"];
    }

    database[user].formaPagamento = formaPagamento[msg];
    database[user].etapa = 7;

    return [`Muito bem, digite OK para prosseguir, ou caso queira, podes cancelar a qualquer momento.`];

}

exports.execute = execute;
