import fs from 'fs'
import { carregarReceitas } from '../utils/carregarDados.js'

const path = "./json/receitas.json"

export async function validarReceita(funcao, receita) {
    validarCategoria(receita.categoria)
    await validarNome(funcao, receita.nome)
    validarIngredientes(receita.listaIngredientes)
    validarPreparo(receita.modoPreparo)
}

function validarCategoria(categoria) {
    if (categoria.length < 3 || categoria.length > 15) {
        throw new Error("Quantidade de caractéres no campo 'Categoria' inválida!")
    }
}

async function validarNome(modo, nome) {    
    if (receitas != {} && modo !== "editar") {
        const receitas = await carregarReceitas();
        
        const receitaEncontrada = receitas.some(receita => receita.nome.toLowerCase() === nome.toLowerCase())
        if (receitaEncontrada) {
            throw new Error('Receita já existe no sistema!')
        }  
    }  

    if (nome.length < 5 || nome.length > 30) {
        throw new Error("Quantidade de caractéres no campo 'nome' inválida!")
    }
}

function validarIngredientes(listaIngredientes) {
    listaIngredientes.map((fase, index) => {
        if (fase.preparo === "" || fase.preparo === undefined || fase.preparo === null) {
            throw new Error(`Campo de preparo n° ${index + 1} inválido!`)
        }

        if (fase.preparo.trim().length < 2 || fase.preparo.trim().length > 15) {
            throw new Error(`Quantidade de caractéres no campo 'preparo' n° ${index + 1} inválido!`)
        }
        
        if (fase.ingredientes.length < 2 || fase.ingredientes.length > 15) {
            throw new Error(`Quantidade de ingredientes na lista n° ${index + 1} inválido!`)
        } else {
            fase.ingredientes.map((ingrediente, j) => {
                if (ingrediente.length < 3 || ingrediente.length > 100 || ingrediente == null) {
                    throw new Error(`Quantidade de caractéres do ingrediente n° ${j} é inválida!`)
                }
            })
        }
    })
}

function validarPreparo(modoPreparo) {
    modoPreparo.map( (fase, index) => {
        if (fase.preparo.trim() === "" || fase.preparo === undefined || fase.preparo === null) {
            throw new Error(`Campo de preparo n° ${index + 1} inválido!`)
        }

        if (fase.preparo.length < 2 || fase.preparo.length > 15) {
            throw new Error(`Quantidade de caractéres no campo de preparo n° ${index + 1} inválido!`)
        }

        if (fase.etapas.length < 2 || fase.etapas.length > 15) {
            throw new Error(`Quantidade de etapas no passo a passo n° ${index + 1} inválido!`)
        } else {
            fase.etapas.map((etapa, j) => {
                if (etapa.length < 5 || etapa.length > 200 || etapa == null) {
                    throw new Error(`Quantidade de caractéres da etapa n° ${j} é inválida!`)
                }
            })
        }
    })
}