import { apiEditar } from "../api/apiControl"
import formatarDados from "./formatarData"

export async function putReceita(id, data) {
    const dataFormatada = formatarDados(data)

    const response = await apiEditar.put(`/${id}`, dataFormatada)
    return response
}