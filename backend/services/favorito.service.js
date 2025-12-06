import fs from "fs";
import { carregarFavoritos } from "../utils/carregarDados"

const path = "./json/favoritos.json"

export function getTodosFavoritos() {
    return carregarFavoritos()
}

export function adicionarFavorito(favorito) {
    const favoritosAtuais = carregarFavoritos()

    favoritosAtuais.push(favorito)
    fs.writeFileSync(path, JSON.stringify(favoritosAtuais))
}