import fs from "fs";
import { carregarFavoritos, carregarReceitas } from "../utils/carregarDados.js";

export async function validarFavoritos(listaFavoritos) {
    const receitas = await carregarReceitas();
    const idsFavoritosSet = new Set(listaFavoritos.map(favorito => favorito.id))
    
    const favoritosEncontrados = receitas.filter(receita => idsFavoritosSet.has(receita.id))

    if (favoritosEncontrados.length !== idsFavoritosSet.size) {
        throw new Error("Não foi possível achar todos os favoritos")
    }
}

export async function favoritoRepetido(favorito) {
    const favoritos = await carregarFavoritos();
    const idsFavoritosSet = new Set(favoritos.map(favorito => favorito.id))

    if (idsFavoritosSet.has(favorito.id)) {
        throw new Error("Receita já está inclusa entre os favoritos")
    }
}