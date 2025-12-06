import * as fs from "fs/promises";

export async function carregarReceitas() {
    try {
        const dados = await fs.readFile('./json/receitas.json')
        return JSON.parse(dados)
    } catch (error) {
        throw new Error("Erro assíncrono:", error)
    }
}

export async function carregarFavoritos() {
    try {
        const dados = await fs.readFile('./json/favoritos.json')
        return JSON.parse(dados)
    } catch (error) {
        throw new Error("Erro assíncrono:", error)
    }
}