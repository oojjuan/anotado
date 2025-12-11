import fs from 'fs';
import { carregarReceitas } from '../utils/carregarDados.js';

const path = "./json/receitas.json"

export async function inserirReceita(receitaNova) {
    const receitasAtuais = await carregarReceitas()
    const idsAtuais = receitasAtuais.map(receita => parseInt(receita.id))
    let proxId

    if (idsAtuais.length === 0) {
        //* Gera ID = 1 caso não há nenhuma receita ainda
        proxId = 1
    } else {
        const idMaisAlto = Math.max(...idsAtuais); 
        proxId = idMaisAlto + 1;
    }

    const proxIdString = proxId.toString()

    const receitaNovaComId = { id: proxIdString, ...receitaNova}

    receitasAtuais.push(receitaNovaComId)
    fs.writeFileSync(path, JSON.stringify(receitasAtuais)) 
}