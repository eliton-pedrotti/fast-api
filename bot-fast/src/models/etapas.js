

const etapas = {
    0: {
        descricao: "Boas Vindas",
        obj: require("../etapas/etapa_0"),
    },

    1: {
        descricao: "Nome",
        obj: require("../etapas/etapa_1"),
    },

    2: {
        descricao: "Telefone",
        obj: require("../etapas/etapa_2"),
    },

    3: {
        descricao: "Endereço Atual",
        obj: require("../etapas/etapa_3"),
    },

    4: {
        descricao: "Informacao adicional origem",
        obj: require("../etapas/etapa_4"),
    },

    5: {
        descricao: "Informacao adicional destino",
        obj: require("../etapas/etapa_5"),
    },

    6: {
        descricao: "Forma de Pagamento",
        obj: require("../etapas/etapa_6"),
    },

    7: {
        descricao: "Finalizar",
        obj: require("../etapas/etapa_7"),
    },
};

exports.etapas = etapas;