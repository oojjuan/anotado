import axios from "axios";

export const apiReceitas = axios.create({
    baseURL: "http://localhost:5000/receitas",
    timeout: 6000
})

export const apiCriar = axios.create({
    baseURL: "http://localhost:5000/criar",
    timeout: 6000
})

export const apiFavoritos = axios.create({
    baseURL: "http://localhost:5000/favoritos",
    timeout: 6000
})

export const apiEditar = axios.create({
    baseURL: "http://localhost:5000/editar",
    timeout: 6000
})