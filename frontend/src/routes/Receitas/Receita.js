import { useParams } from "react-router-dom"
import { getReceita } from "../../services/receitasData"
import { useEffect, useState } from "react"


function Receita() {
    const { idReceita } = useParams()
    const [receita, setReceita] = useState()

    useEffect(() => {
        async function fetchReceita() {
            if (!idReceita) return;
            const receitaAPI = await getReceita(idReceita)
            setReceita(receitaAPI)
        }
        fetchReceita()
    }, [idReceita])

    
    
    if (!receita) {
    return <p>Carregando receita...</p>
    }

    return (
        <main className="container-receita">
        {/*
        //TODO: Fazer o container específico para a receita
        //TODO: Se possível, fazer uma página de ingredientes e outra para o modo de preparo 
        */}
        </main>
    )
}

export default Receita