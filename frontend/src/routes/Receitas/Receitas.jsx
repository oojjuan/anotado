import { useEffect, useState } from 'react'
import Pesquisa from '../../components/Pesquisa/pesquisa'
import { getReceitas } from '../../services/receitasData.js'
import './Receitas.css'
import { getFavoritos } from '../../services/favoritosData.js'

function Receitas({ tipo }) {
    const [receitas, setReceitas] = useState([])
    const [receitasPesquisadas, setReceitasPesquisadas] = useState([])   
    const [idMinReceita, setIdMinReceita] = useState(0)


    
    //* Buscar receitas
    useEffect( () => {
        async function fetchReceitas() {
            const receitasAPI = tipo !== "favoritos" ? await getReceitas() : await getFavoritos()
            setReceitas(receitasAPI)
            //* Exibe as receitas na página ao carregar
            setReceitasPesquisadas(receitasAPI)
        }
        
        fetchReceitas()
    }, [tipo])

    
    
    return (
        <main className='container-receitas'>
            <h1 className="cor-escuro peso-fino familia-principal formato-maiuscula tamanho-2-25">{tipo !== "favoritos" ? "Receitas" : "Favoritos"}</h1>
            <Pesquisa
                tipo={tipo}
                receitas={receitas}
                receitasPesquisadas={receitasPesquisadas}
                setReceitasPesquisadas={setReceitasPesquisadas}
                idMinReceita={idMinReceita}
                setIdMinReceita={setIdMinReceita}
            />
        </main>
    )
}

export default Receitas