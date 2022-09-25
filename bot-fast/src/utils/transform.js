
function transformData(database){
   return {
       nome: database.nome,
       telefone: database.telefone,
       enderecoAtual: database.endereco,
       infoAdicionalOrigem: database.infoAdicionalOrigem,
       infoAdicionalDestino: database.infoAdicionalDestino,
       formaPagamento: database.formaPagamento.description
   }
}

module.exports = transformData;
