import fs from "fs";

export function getTodasReceitas() {
    return JSON.parse(fs.readFileSync('./json/receitas.json'))
}

