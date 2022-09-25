const { database } = require("../models/database");

function execute(user, msg) {
    if (msg === "2" || msg === "cancelar" || msg === "Cancelar" || msg === "CANCELAR") {
        database[user].etapa = 0;
        return ["Atendimento cancelado com sucesso"];
    }

    if (msg === "ok" || msg === "OK" || msg === "Ok") {
        return ["Digite seu endereco atual por favor, (aquele onde o motorista irá lhe buscar): "];
    }

    database[user].endereco = msg;
    database[user].etapa = 4;

    return [`Muito bem, digite OK para prosseguir, ou caso queira, podes cancelar a qualquer momento.`];
}

exports.execute = execute;
