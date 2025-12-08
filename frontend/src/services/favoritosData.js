import { apiFavoritos } from "../api/apiControl";

export async function getFavoritos() {
    const response = await apiFavoritos.get('/')

    return response.data
}

export async function postFavoritos(data) {
    console.log("Entrou no POST")
    const response = await apiFavoritos.post('/', data)
    console.log("Postou a RECEITA")
    return response
}

export async function deleteFavorito(id) {
    const response = await apiFavoritos.delete(`/${id}`)

    return response
}