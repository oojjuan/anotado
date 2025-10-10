import axios from "axios";

export const apiReceitas = axios.create({
    baseURL: "http://localhost:5000/receitas",
    timeout: 6000
})

export const apiFavoritos = axios.create({
    baseURL: "http://localhost:5000/favoritos",
    timeout: 6000
})