import { atualizarReceita } from "../services/editar.service.js"
import { validarReceita } from "../validations/criar.validator.js"
import { validarReceitaId } from "../validations/receita.validator.js"


export async function putReceita(req, res) {
    try {
        const receitaId = req.params.id
        await validarReceitaId(receitaId)
        const receitaAtualizada = req.body

        await validarReceita("editar", receitaAtualizada)
        await atualizarReceita(receitaId, receitaAtualizada)
        
        res.status(200)
        res.send(receitaAtualizada)
    } catch (error) {
        res.send(`Ops! Ocorreu um problema:\n${error}`)
    }
}