import { apiReceitas } from "../api/apiControl";

export async function getReceitas() {
    const response = await apiReceitas.get('/')

    return response.data
}

export async function getReceita(id) {
    const response = await apiReceitas.get(`/${id}`)

    return response.data
}