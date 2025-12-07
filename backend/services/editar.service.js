import fs from "fs"
import { carregarReceitas } from "../utils/carregarDados.js"

const path = "./json/receitas.json"

export async function atualizarReceita(receitaId, receitaAtualizada) {
    const receitasAtuais = await carregarReceitas()

    const listaSemReceitaAntiga = receitasAtuais.filter(receita => receita.id !== receitaId)

    const novaReceita = { id: receitaId, ...receitaAtualizada}
    
    const listaAtualizada = [...listaSemReceitaAntiga, novaReceita]
    /* listaAtualizada.sort((a,b) => a.id - b.id) */
    
    fs.writeFileSync(path, JSON.stringify(listaAtualizada))    
}