import { getTodasReceitas } from '../services/receitas.js';

export function getReceitas (req, res) {
    try {
        const receitas = getTodasReceitas()
        res.send(receitas)
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}


