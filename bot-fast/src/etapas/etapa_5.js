const { database } = require("../models/database");

function execute(user, msg) {

    if (msg === "2" || msg === "cancelar" || msg === "Cancelar" || msg === "CANCELAR") {
        database[user].stage = 0;
        return ["Atendimento cancelado com sucesso"];
    }

    if (msg === "ok" || msg === "OK" || msg === "Ok") {
        return ["Digite alguma informacao adicional, para onde o motorista deve levar você: "];
    }

    database[user].infoAdicionalDestino = msg;
    database[user].etapa = 6;

    return [`Muito bem, digite OK para prosseguir, ou caso queira, podes cancelar a qualquer momento.`];
}

exports.execute = execute;
