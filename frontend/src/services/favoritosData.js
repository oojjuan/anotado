import { apiFavoritos } from "../api/apiControl";

export async function getFavoritos() {
    const response = await apiFavoritos.get('/')

    return response.data
}

export async function postFavoritos(data) {
    const response = await apiFavoritos.post('/', data)

    return response
}