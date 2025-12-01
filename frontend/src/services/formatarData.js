export default function formatarDados(data) {
    return {
        categoria: data.categoria,
        nome: data.nome,
        
        listaIngredientes: data.listaIngredientes.map(lista => ({
            preparo: lista.preparo,
            ingredientes: lista.ingredientes.map(ingrediente => ingrediente.textos)
        })),

        modoPreparo: data.modoPreparo.map(lista => ({
            preparo: lista.preparo,
            etapas: lista.etapa.map(etapa => etapa.textos)
        }))
    };
}