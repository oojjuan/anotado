import fs from "fs";

const path = "./json/receitas.test.json"

export function getTodasReceitas() {
    return JSON.parse(fs.readFileSync(path))
}

export function getReceitaPorId(id) {
    const receitas = JSON.parse(fs.readFileSync(path))
    const receitaFiltrada = receitas.filter(receita => receita.id === id)[0]

    return receitaFiltrada
}

export function deletarReceita(id) {
    const receitasAtuais = JSON.parse(fs.readFileSync(path))
    const indiceExcluido = receitasAtuais.findIndex(receita => receita.id === id)

    receitasAtuais.splice(indiceExcluido, 1)

    fs.writeFileSync(path, JSON.stringify(receitasAtuais))
}

