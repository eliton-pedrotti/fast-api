const venom = require("venom-bot");
const { database } = require("./models/database");
const { etapas } = require("../src/models/etapas");

venom.create().then((client) => start(client));

function start(client) {

    client.onMessage((message) => {

        if (!message.isGroupMsg && message.from === '555584510142@c.us') {
            let resp = etapas[getEtapas(message.from)].obj.execute(
                message.from,
                message.body,
                message.sender.name
            );

            for (let index = 0; index < resp.length; index++) {
                const element = resp[index];
                client.sendText(message.from, element);
            }
        }
    });
}

function getEtapas(user) {
    if (database[user]) {
        //Se existir esse numero no banco de dados
        return database[user].etapa;
    } else {
        //Se for a primeira vez que entra em contato
        database[user] = {
            etapa: 0,
        };
        return database[user].etapa;
    }
}