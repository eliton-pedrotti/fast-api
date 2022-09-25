const { database } = require("../models/database");
const axios = require('axios');
const transformData = require("../utils/transform");

async function execute(user, msg) {

    database[user].etapa = 0;

    const dados = transformData(database[user]);
    console.log(dados)
    axios.post('http://localhost:3000/corrida', dados);

    //FALTOU ESSA PARTE, NAO ESTA RETORNANDNO PRO USUARIO A MENSAGEM FINAL
    return [
        "Obrigado pela preferencia.",
        "Aguarde, estamos processando sua solicitacao de corrida, o motorista chegará em breve no endereço fornecido.",
        "Mais informações ligue para 9999-9999",
    ];
}
exports.execute = execute;
