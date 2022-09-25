const { database } = require("../models/database");

function execute(user, msg) {

    if (msg === "2" || msg === "cancelar" || msg === "Cancelar" || msg === "CANCELAR") {
        database[user].stage = 0;
        return ["Atendimento cancelado com sucesso"];
    }

    if (msg === "ok" || msg === "OK" || msg === "Ok") {
        return ["Digite alguma informacao adicional, para que o motorista lhe encontre mais rapidamente: "];
    }

    database[user].infoAdicionalOrigem = msg;
    database[user].etapa = 5;

    return [`Muito bem, digite OK para prosseguir, ou caso queira, podes cancelar a qualquer momento.`];
}

exports.execute = execute;
