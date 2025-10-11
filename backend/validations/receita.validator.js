import fs from 'fs'

const path = './json/receitas.test.json'
const receitas = JSON.parse(fs.readFileSync(path))

export function validarReceitaId(idReceita) {
    if (idReceita === undefined || idReceita === null || idReceita === '') {
        throw new Error('O ID da receita não foi informado.')
    }

    const idNumero = Number(idReceita)
    if (isNaN(idNumero)) {
        throw new Error('O ID da receita deve ser um número válido.')
    }

    const receitaEncontrada = receitas.find(receita => receita.id === idNumero)
    if (receitaEncontrada) {
        throw new Error('Nenhuma receita encontrada com o ID informado.')
    }
}