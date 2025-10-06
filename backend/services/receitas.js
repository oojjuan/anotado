import fs from "fs";

export function getTodasReceitas() {
    return JSON.parse(fs.readFileSync('receitas.json'))
}

export function getReceitaPorId(id) {
    const receitas = JSON.parse(fs.readFileSync("receitas.json"))
    const receitaFiltrada = receitas.filter(receita => receita.id === id)[0]

    return receitaFiltrada
}

export function deleteReceita(id) {
    const receitasAtuais = JSON.parse(fs.readFileSync("receitas.json"))
    const indiceExcluido = receitasAtuais.findIndex(receita => receita.id === id)

    receitasAtuais.splice(indiceExcluido, 1)

    fs.writeFileSync("receitas.json", JSON.stringify(receitasAtuais))
}

