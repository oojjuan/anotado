import { deletarReceita, getReceitaPorId, getTodasReceitas } from '../services/receitas.service.js';
import { validarReceitaId } from '../validations/receita.validator.js';

export function getReceitas (req, res) {
    try {
        const receitas = getTodasReceitas()
        res.send(receitas)
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

export function getReceita (req, res) {
    try {
        const receitaId = req.params.id
        validarReceitaId(receitaId)
        const receita = getReceitaPorId(receitaId)
        res.send(receita)
    } catch(error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

export function deleteReceita (req, res) {
    try {
        const receitaId = req.params.id
        validarReceitaId(receitaId)
        deletarReceita(receitaId)
        res.send("Receita deletada com sucesso!")
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}


