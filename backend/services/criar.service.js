import fs from 'fs';
import { carregarReceitas } from '../utils/carregarDados.js';

const path = "./json/receitas.json"

export async function inserirReceita(receitaNova) {
    const receitasAtuais = await carregarReceitas()
    
    //* Gera ID = 1 caso não há nenhuma receita ainda
    const ultimaReceita = receitasAtuais.length === 0 ? "1" : receitasAtuais[receitasAtuais.length - 1]
    const proxId = ultimaReceita === "1" ? ultimaReceita : (parseInt(ultimaReceita.id) + 1).toString()

    const receitaNovaComId = { id: proxId, ...receitaNova}

    receitasAtuais.push(receitaNovaComId)
    fs.writeFileSync(path, JSON.stringify(receitasAtuais)) 
}