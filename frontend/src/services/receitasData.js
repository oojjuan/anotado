import { apiReceitas } from "../api/apiControl";

export async function getReceitas() {
    const response = await apiReceitas.get('/')

    return response.data
}