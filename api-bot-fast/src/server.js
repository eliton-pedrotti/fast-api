const express = require('express');
const { Builder } = require('selenium-webdriver');
const { SOLICITACAO_CORRIDA_SUCESS, CORRIDA_CANCELADA_SUCESSO } = require("./constantes/constantes");
const { setCancelarCorrida, sendToPainelControle, run } = require("./service/painel-service");
const sleep = require('./utils/sleep');

const app = express();
const PORT = 3000;
app.use(express.json());

//REFATOREI, TESTAR DE NOVO

const endpointSolicitar = '/corrida';
const endpointCancelar = '/cancelar/:id';

let driver;

app.post(endpointSolicitar, async (req, res) => {
    sendToPainelControle(req.body, driver);
    return res.json({
        response: SOLICITACAO_CORRIDA_SUCESS
    });
});

app.post(endpointCancelar, async (req, res) => {
    setCancelarCorrida(req.params.id, driver);
    return res.json({
        response: CORRIDA_CANCELADA_SUCESSO
    });
});

app.listen(PORT, async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await run(driver);
    console.log(`App is running on port ${PORT}`);
});