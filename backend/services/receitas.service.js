import fs from "fs";
import { carregarReceitas } from "../utils/carregarDados.js";

const path = "./json/receitas.json"

export async function getTodasReceitas() {
    return await carregarReceitas()
}

export async function getReceitaPorId(id) {
    const receitas = await carregarReceitas()
    const receitaFiltrada = receitas.filter(receita => receita.id === id)[0]

    return receitaFiltrada
}

export async function deletarReceita(id) {
    const receitasAtuais = await carregarReceitas()
    const indiceExcluido = receitasAtuais.findIndex(receita => receita.id === id)

    receitasAtuais.splice(indiceExcluido, 1)

    fs.writeFileSync(path, JSON.stringify(receitasAtuais))
}

