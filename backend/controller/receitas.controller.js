import { deletarReceita, getReceitaPorId, getTodasReceitas } from '../services/receitas.service.js';
import { validarReceitaId } from '../validations/receita.validator.js';

export async function getReceitas (req, res) {
    try {
        const receitas = await getTodasReceitas()
        res.status(200)
        res.send(receitas)
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

export async function getReceita (req, res) {
    try {
        const receitaId = req.params.id
        validarReceitaId(receitaId)
        const receita = await getReceitaPorId(receitaId)
        res.status(200)
        res.send(receita)
    } catch(error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

export async function deleteReceita (req, res) {
    try {
        const receitaId = req.params.id
        validarReceitaId(receitaId)
        await deletarReceita(receitaId)
        res.status(200)
        res.send("Receita deletada com sucesso!")
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}


