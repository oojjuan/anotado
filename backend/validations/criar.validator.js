import fs from 'fs'

const path = "./json/receitas.test.json"
let string = "string"
let array = []

export function validarReceita(receita) {
    validarCategoria(receita.categoria)
    validarNome(receita.nome)
    validarIngredientes(receita.listaIngredientes)
    validarPreparo(receita.modoPreparo)
}

function validarCategoria(categoria) {
    if (categoria.length < 3 || categoria.length > 15) {
        throw new Error("Quantidade de caractéres no campo 'Categoria' inválida!")
    }
}

function validarNome(nome) {
    const receitas = JSON.parse(fs.readFileSync(path))
    
    if (receitas != {}) {
        const receitaEncontrada = receitas.some(receita => receita.nome.toLowerCase() ===nome.toLowerCase())
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
            console.log(fase.preparo.trim())
            throw new Error(`Quantidade de caractéres no campo 'preparo' n° ${index + 1} inválido!`)
        }

        if (fase.ingredientes.length < 2 || fase.ingredientes.length > 15) {
            throw new Error(`Quantidade de ingredientes na lista n° ${index + 1} inválido!`)
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
        }
    })
}