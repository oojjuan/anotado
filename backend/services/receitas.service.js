import fs from "fs";
import { carregarReceitas } from "../utils/carregarDados.js";

const path = "./json/receitas.json"

export function getTodasReceitas() {
    return carregarReceitas()
}

export function getReceitaPorId(id) {
    const receitas = carregarReceitas()
    const receitaFiltrada = receitas.filter(receita => receita.id === id)[0]

    return receitaFiltrada
}

export function deletarReceita(id) {
    const receitasAtuais = carregarReceitas()
    const indiceExcluido = receitasAtuais.findIndex(receita => receita.id === id)

    receitasAtuais.splice(indiceExcluido, 1)

    fs.writeFileSync(path, JSON.stringify(receitasAtuais))
}

