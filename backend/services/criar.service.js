import fs from 'fs';

const path = "./json/receitas.test.json"

export function inserirReceita(receitaNova) {
    const receitasAtuais = JSON.parse(fs.readFileSync(path))
    //* Gera ID = 1 caso não há nenhuma receita ainda
    const ultimaReceita = receitasAtuais.length === 0 ? "1" : receitasAtuais[receitasAtuais.length - 1]
    const proxId = ultimaReceita === "1" ? ultimaReceita : (parseInt(ultimaReceita.id) + 1).toString()

    const receitaNovaComId = { id: proxId, ...receitaNova}

    receitasAtuais.push(receitaNovaComId)
    fs.writeFileSync(path, JSON.stringify(receitasAtuais)) 
}