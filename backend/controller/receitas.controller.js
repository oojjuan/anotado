import { deletarReceita, getReceitaPorId, getTodasReceitas } from '../services/receitas.service.js';

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
        
        if (receitaId && Number(receitaId)) {
            const receita = getReceitaPorId(receitaId)
            res.send(receita)
        } else {
            res.status(422)
            res.send("ID inválido!")
        }

    } catch(error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

export function deleteReceita (req, res) {
    try {
        const receitaId = req.params.id

        if(receitaId && Number(receitaId)) {
            deletarReceita(receitaId)
            res.send("Receita deletado com sucesso!")
        } else {
            res.status(422)
            res.send("ID inválido!")
        }

    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}


