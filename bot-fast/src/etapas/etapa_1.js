const { atendimento } = require("../models/atendimento")
const { database } = require("../models/database");

 function execute(user, msg) {

    if (msg === "2" || msg === "cancelar" || msg === "Cancelar" || msg === "CANCELAR") {
        database[user].etapa = 0;
        return ["Atendimento cancelado com sucesso"];
    }

    if (msg === "1") {
        return [
            "Qual o seu nome?",
            "Muito bem, vamos iniciar a sua solicitacao de corrida.",
        ]
    }

    /**AJUSTAR */
    // if (!atendimento[msg]) {
    //     return ["Código inválido, digite corretamente"];
    // }

    database[user].nome = msg;
    database[user].etapa = 2;

    return [`Boa, ${msg}, digite OK para prosseguir, ou caso queira, podes cancelar a qualquer momento.`];
}

exports.execute = execute;
