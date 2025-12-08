import { adicionarFavorito, getTodosFavoritos, removerFavorito } from "../services/favorito.service.js"
import { validarFavorito, validarFavoritos } from "../validations/favoritos.validator.js"


export async function getFavoritos(req, res) {
    try {
        const favoritos = await getTodosFavoritos()
        await validarFavoritos(favoritos)
        res.status(200)
        res.send(favoritos)
    } catch (error) {
        res.send(`Ops! Ocorreu um erro\n${error}`)
    }
}

export async function postFavoritos(req, res) {
    try {
        const novoFavorito = req.body
        await validarFavorito(novoFavorito)
        await adicionarFavorito(novoFavorito)
        res.status(201)
        res.send("Receita favoritada!")
    } catch (error) {
        res.send(`Ops! Ocorreu um erro\n${error}`)
    }
}

export async function deleteFavorito(req, res) {
    try {
        const idFavorito = req.params.id
        await validarFavorito(idFavorito)
        await removerFavorito(idFavorito)
        res.status(200)
        res.send("Receita deletada com sucesso")
    } catch (error) {
        res.send("Ops! Ocorreu um erro\n", error)
    }
}