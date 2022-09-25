require('dotenv').config()
const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeDriver = require('chromedriver');
const {
    CLICK_OPCAO_EXTRAS,
    SOLICITACAO_CORRIDA_SUCESS,
    EMAIL_XPATH,
    SENHA_XPATH,
    REMOVE_ELEMENT_DISABLED,
    getToken,
    LOGIN_CLICK,
    CLICK_SOLICITAR_CORRIDA,
    CLICK_PASSAGEIROS,
    ENDERECO_PARTIDA_XPATH,
    PESQUISA_ENDERECO,
    PESQUISA_ENDERECO_SEARCH_CLICK,
    INFO_ADICIONAL_XPATH,
    INFO_ADICIONAL_DESTINO_XPATH,
    CONTINUAR_PEDIDO_CLICK,
    getMetodoPagamento,
    SELECIONA_SERVICO_CLICK,
    SELECIONA_VALOR_CONDUTOR,
    ADICIONA_CONDUTOR_XPATH,
    NOME_CONDUTOR,
    CONTINUAR_BOTAO_CLICK,
    NOME_PASSAGEIRO_XPATH,
    CLICK_BUSCA_NOME,
    SELECIONA_NOME,
    TELEFONE_USUARIO_XPATH,
    FINALIZAR_PEDIDO_CLICK
} = require('../constantes/constantes');
const sleep = require('../utils/sleep');
const resolveCaptcha = require("./resolve-captcha-service");

const { FAST_APP, SITE_KEY, EMAIL, PASSWORD } = process.env

chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build());

async function run(driver) {
    const token = await resolveCaptcha(SITE_KEY, FAST_APP);
    console.log(`Token obtido com sucesso! ${token.request}`);

    await driver.manage().window().maximize();
    await driver.get(FAST_APP);

    const email = await driver.findElement(By.xpath(EMAIL_XPATH));
    const senha = await driver.findElement(By.xpath(SENHA_XPATH));

    await email.sendKeys(EMAIL);
    await senha.sendKeys(PASSWORD);

    await driver.executeScript(getToken(token));
    await driver.executeScript(REMOVE_ELEMENT_DISABLED);
    await driver.executeScript(LOGIN_CLICK);
}

async function sendToPainelControle(dadosContato, driver) {

    const { nome, telefone, enderecoAtual, infoAdicionalOrigem, formaPagamento, infoAdicionalDestino } = dadosContato;
    console.log(dadosContato);

    /**Extras */
    await driver.switchTo().newWindow('window').then(async () => await driver.get('https://dashmob.com.br/dashboard.php'));
    const read = await driver.executeScript("return document.readyState == 'complete'");
    // await sleep(5);
    console.log('Abrindo service opcao => Extras');
    // await sleep(5);
    if (read) await driver.executeScript(CLICK_OPCAO_EXTRAS);

    /**Solicitar corrida */
    console.log('Abrindo service opcao => Solicitar corrida');
    // await sleep(5);
    await driver.executeScript(CLICK_SOLICITAR_CORRIDA);

    /**Passageiros */
    console.log('Abrindo service opcao => Passageiros');
    // await sleep(5);
    await driver.executeScript(CLICK_PASSAGEIROS);

    await sleep(5);

    /**Endereço de Partida */
    const readPassageirosLayout = await driver.executeScript("return document.readyState == 'complete'");
    if (readPassageirosLayout) await driver.findElement(By.xpath(ENDERECO_PARTIDA_XPATH)).sendKeys(enderecoAtual);
    // await enderecoPartida.sendKeys(enderecoAtual);
    console.log('Adicionado Endereco de Partida....');

    // /**botao de pesquisa endereço */
    await driver.executeScript(PESQUISA_ENDERECO);
    await sleep(5);
    await driver.executeScript(PESQUISA_ENDERECO_SEARCH_CLICK);

    /**Informação Adicional Origem*/
    await driver.findElement(By.xpath(INFO_ADICIONAL_XPATH)).sendKeys(infoAdicionalOrigem);
    console.log('Adicionado Informação Adicional Origem....');
    await sleep(5);
    /** Informação Adicional Destino*/
    await driver.findElement(By.xpath(INFO_ADICIONAL_DESTINO_XPATH)).sendKeys(infoAdicionalDestino);
    console.log('Adicionado Informação Adicional Destino....');

    /**Continuar pedido */
    await sleep(5);
    await driver.executeScript(CONTINUAR_PEDIDO_CLICK);

    /**Seleciona o metodo de pagamento */
    await sleep(5);
    await driver.executeScript(getMetodoPagamento(formaPagamento));
    console.log('Adicionado Metodo de Pagamento....');

    /**Seleciona o Serviço */
    await sleep(5);
    await driver.executeScript(SELECIONA_SERVICO_CLICK);
    console.log('Selecionando Servico....')

    await sleep(5);
    await driver.executeScript(SELECIONA_VALOR_CONDUTOR);

    await driver.findElement(By.xpath(ADICIONA_CONDUTOR_XPATH)).sendKeys(NOME_CONDUTOR);;
    console.log('Adicionado condutor....');

    await sleep(5);
    await driver.executeScript(CONTINUAR_BOTAO_CLICK);

    await sleep(5);

    /**Seleciona o nome do passageiro */
    await driver.findElement(By.xpath(NOME_PASSAGEIRO_XPATH)).sendKeys(nome);;
    console.log('Adicionado nome de passageiro....')

    await sleep(5);
    await driver.executeScript(CLICK_BUSCA_NOME);

    await sleep(5);
    /**Seleciona o nome encontrado pelo search */
    await driver.executeScript(SELECIONA_NOME);

    /**Adiciona o telefone do usuario */
    await driver.findElement(By.xpath(TELEFONE_USUARIO_XPATH)).sendKeys(telefone);
    console.log('Adicionado telefone de passageiro....')

    await sleep(5);
    console.log(SOLICITACAO_CORRIDA_SUCESS)

    /**finalizar pedido */
    await sleep(5);
    await driver.executeScript(FINALIZAR_PEDIDO_CLICK);
    // await driver.close();
}

async function setCancelarCorrida(id, driver) {

    /**cancelar corrida */
    await sleep(3);
    await driver.switchTo().newWindow('tab').then(async () => await driver.get(`https://dashmob.com.br/views/corridas/info.php?id=${id}`));
    await sleep(3);
    await driver.executeScript("return document.getElementById('btCancelar').click()");
    await sleep(1);
    await driver.executeScript("return document.querySelector('#dialogCancelarCorrida > div > div > div.modal-footer > a.btn.btn-blue').click()");
    console.log('Corrida cancelada com sucesso!');
    await driver.close();
}

module.exports = {
    sendToPainelControle,
    setCancelarCorrida,
    run
};