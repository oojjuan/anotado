import { inserirReceita } from "../services/criar.service.js"
import { validarReceita } from "../validations/criar.validator.js"


export function postReceita (req, res) {
    try {
        const receitaNova = req.body
        validarReceita(receitaNova)
        inserirReceita(receitaNova)
        res.status(201)
        res.send("Receita adicionada!")        
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}