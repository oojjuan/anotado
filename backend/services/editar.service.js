import fs from "fs"

const path = "./json/receitas.json"

export function atualizarReceita(receitaId, receitaAtualizada) {
    const receitasAtuais = JSON.parse(fs.readFileSync(path))

    const listaSemReceitaAntiga = receitasAtuais.filter(receita => receita.id !== receitaId)

    const novaReceita = { id: receitaId, ...receitaAtualizada}
    
    const listaAtualizada = [...listaSemReceitaAntiga, novaReceita]
    /* listaAtualizada.sort((a,b) => a.id - b.id) */
    
    fs.writeFileSync(path, JSON.stringify(listaAtualizada))    
}