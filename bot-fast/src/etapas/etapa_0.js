const { atendimento } = require("../models/atendimento");
const { database } = require("../models/database");

function execute(user, msg, contato) {

    // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }

    let menu = 'Atendimento  \n';

    Object.keys(atendimento).forEach((value) => {
        let element = atendimento[value];
        menu += `${value} - ${element.description}\n`;
    });

    database[user].etapa = 1;

    return [
        menu,
        `${time} ${contato} sou um assistente virtual, irei lhe acompanhar em sua corrida, para fazer o pedido basta enviar o codigo do serviço`,
    ];
}

exports.execute = execute;