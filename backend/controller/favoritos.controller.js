import { adicionarFavorito, getTodosFavoritos } from "../services/favorito.service"
import { favoritoRepetido, validarFavoritos } from "../validations/favoritos.validator"


export function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        validarFavoritos(favoritos)
        res.status(200)
        res.send(favoritos)
    } catch (error) {
        res.send(`Ops! Ocorreu um erro\n${error}`)
    }
}

export function postFavoritos(req, res) {
    try {
        const novoFavorito = req.body
        favoritoRepetido(novoFavorito)
        adicionarFavorito(novoFavorito)
        res.status(201)
        res.send("Receita favoritada!")
    } catch (error) {
        res.send(`Ops! Ocorreu um erro\n${error}`)
    }
}