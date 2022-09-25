
//LOGIN
const EMAIL_XPATH = '//*[@id="username"]';
const SENHA_XPATH = '//*[@id="password"]';
const REMOVE_ELEMENT_DISABLED = "return document.getElementById('btnLoginSystem').removeAttribute('disabled')";
const getToken = (token) => `return document.getElementById('g-recaptcha-response').innerHTML = '${token.request}'`;
const LOGIN_CLICK = "return document.getElementById('btnLoginSystem').click()";

//EXTRAS
const CLICK_OPCAO_EXTRAS = "return document.querySelector('#main-menu > li:nth-child(3) > a').click()";

//SOLICITAR CORRIDA
const CLICK_SOLICITAR_CORRIDA = "return document.querySelector('#main-menu > li.root-level.has-sub.opened > ul > li > a').click()";

//PASSAGEIROS
const CLICK_PASSAGEIROS = "return document.querySelector('#main-menu > li.root-level.has-sub.opened > ul > li > ul > li:nth-child(1) > a').click()";

//ENDERECO PARTIDA
const ENDERECO_PARTIDA_XPATH = '//*[@id="partidaField"]';
const PESQUISA_ENDERECO = "return document.getElementById('sourceSearchAction').click()";
const PESQUISA_ENDERECO_SEARCH_CLICK = "document.querySelector('#autocomplete-data-partida > div.sugestion.address-suggestion').click()";

//SUCESSO RESPONSE
const SOLICITACAO_CORRIDA_SUCESS = "Solicitação de corrida realizada com sucesso!";
const CORRIDA_CANCELADA_SUCESSO = "Solicitação de cancelamento de corrida realizada com sucesso!";

//INFORMACAO ADICIONAL ORIGEM
const INFO_ADICIONAL_XPATH = '/html/body/div[2]/div[2]/div[2]/form/div[2]/div[1]/div[3]/div[1]/div/input';

//INFORMACAO ADICIONAL DESTINO
const INFO_ADICIONAL_DESTINO_XPATH = '/html/body/div[2]/div[2]/div[2]/form/div[2]/div[1]/div[3]/div[2]/div/input';

//CONTINUAR PEDIDO
const CONTINUAR_PEDIDO_CLICK = "return document.querySelector('#formDespacho > div.tab-content > ul > li.next > a').click()";

//SELECIONA METODO PAGAMENTO
const METODOS_PAGAMENTO = {
    Dinheiro: 'KKmNHsKvow',
    Cartao: 'Au76Z7CsIT',
    Pix: 'f42a780b3c'
}
const getMetodoPagamento = (formaPagamento) => `return document.querySelector('#metodoPagamentoField').value = '${METODOS_PAGAMENTO[formaPagamento]}'`;

//SELECIONA SERVICO
const SELECIONA_SERVICO_CLICK = "return document.querySelector('#precoFieldDesconto').click()";

//SELECIONA VALOR CONDUTOR
const SELECIONA_VALOR_CONDUTOR = `return document.querySelector('#filtro_condutor').value = 'nome'`;
const ADICIONA_CONDUTOR_XPATH = '//*[@id="termo_busca_condutor"]';
const NOME_CONDUTOR = 'Serjao vaqueiro'; //verificar isso

//CONTINUAR
const CONTINUAR_BOTAO_CLICK = "return document.querySelector('#formDespacho > div.tab-content > ul > li.next > a').click()";

//SELECIONA NOME PASSAGEIRO
const NOME_PASSAGEIRO_XPATH = '//*[@id="nome"]';
const CLICK_BUSCA_NOME = "return clickBusca('#nome')";
const SELECIONA_NOME = "return document.querySelector('#divNome > div').click()";

//TELEFONE USUARIO
const TELEFONE_USUARIO_XPATH = '//*[@id="maskPhone"]';

//FINALIZAR PEDIDO
const FINALIZAR_PEDIDO_CLICK = "return document.querySelector('#tab2-3 > div:nth-child(3) > div > div > button').click()";

module.exports = {
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
    METODOS_PAGAMENTO,
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
    FINALIZAR_PEDIDO_CLICK,
    CORRIDA_CANCELADA_SUCESSO
}