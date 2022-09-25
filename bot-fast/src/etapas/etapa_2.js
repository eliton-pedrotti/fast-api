const { database } = require("../models/database");

function execute(user, msg) {

    if (msg === "2" || msg === "cancelar" || msg === "Cancelar" || msg === "CANCELAR") {
        database[user].etapa = 0;
        return ["Atendimento cancelado com sucesso"];
    }

    if (msg === "ok" || msg === "OK" || msg === "Ok") {
        return ["Digite seu telefone por favor: "];
    }

    database[user].telefone = msg;
    database[user].etapa = 3;

    return [`Muito bem, digite OK para prosseguir, ou caso queira, podes cancelar a qualquer momento.`];
}

exports.execute = execute;
