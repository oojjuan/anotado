import { apiCriar } from "../api/apiControl";

function formatarDados(data) {
    return {
        categoria: data.categoria,
        nome: data.nome,
        
        listaIngredientes: data.listaIngredientes.map(lista => ({
            preparo: lista.preparo,
            ingredientes: lista.ingredientes.map(ingrediente => ingrediente.textos)
        })),

        modoPreparo: data.modoPreparo.map(lista => ({
            preparo: lista.preparo,
            etapas: lista.etapa.map((etapa, i) => etapa.textos)
        }))
    };
}

export async function postReceita(data) {
    const dataFormatada = formatarDados(data)

    const response = await apiCriar.post('/', dataFormatada)
    return response
}