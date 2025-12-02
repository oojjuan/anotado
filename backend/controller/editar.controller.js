import { atualizarReceita } from "../services/editar.service.js"
import { validarReceita } from "../validations/criar.validator.js"
import { validarReceitaId } from "../validations/receita.validator.js"


export function putReceita(req, res) {
    try {
        const receitaId = req.params.id
        validarReceitaId(receitaId)
        const receitaAtualizada = req.body

        validarReceita("editar", receitaAtualizada)
        atualizarReceita(receitaId, receitaAtualizada)
        
        res.status(200)
        res.send(receitaAtualizada)
    } catch (error) {
        res.send(`Ops! Ocorreu um problema:\n${error}`)
    }
}