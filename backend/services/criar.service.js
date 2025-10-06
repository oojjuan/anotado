import fs from 'fs';

const path = "./json/receitas.test.json"

export function inserirReceita(receitaNova) {
    const receitasAtuais = JSON.parse(fs.readFileSync(path))
    const ultimaReceita = receitasAtuais[receitasAtuais.length - 1]
    const proxId = (parseInt(ultimaReceita.id) + 1).toString()

    const receitaNovaComId = { id: proxId, ...receitaNova}

    receitasAtuais.push(receitaNovaComId)
    fs.writeFileSync(path, JSON.stringify(receitasAtuais)) 
}