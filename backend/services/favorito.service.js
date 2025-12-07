import fs from "fs";
import { carregarFavoritos } from "../utils/carregarDados.js"

const path = "./json/favoritos.json"

export async function getTodosFavoritos() {
    return await carregarFavoritos()
}

export async function adicionarFavorito(favorito) {
    const favoritosAtuais = await carregarFavoritos()

    favoritosAtuais.push(favorito)
    fs.writeFileSync(path, JSON.stringify(favoritosAtuais))
}