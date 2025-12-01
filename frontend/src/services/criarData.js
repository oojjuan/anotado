import { apiCriar } from "../api/apiControl";
import formatarDados from "./formatarData";

export async function postReceita(data) {
    const dataFormatada = formatarDados(data)

    const response = await apiCriar.post('/', dataFormatada)
    return response
}