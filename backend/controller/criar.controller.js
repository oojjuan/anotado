import { inserirReceita } from "../services/criar.service.js"


export function postReceita (req, res) {
    try {
        const receitaNova = req.body

        if (req.body.categoria && req.body.nome) {
            inserirReceita(receitaNova)
            res.status(201)
            res.send("Receita adicionada!")
        } else {
            res.status(422)
            res.send("As informações são inválidas!")
        }
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}