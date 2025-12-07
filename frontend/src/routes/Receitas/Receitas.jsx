import { useEffect, useState } from 'react'
import Pesquisa from '../../components/Pesquisa/pesquisa'
import Titulo from '../../components/Titulo/titulo'
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
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="fino"
                fonteFamilia="principal"
                tipoTitulo="principal"
                fonteFormatacao="maiuscula"
            >{tipo !== "favoritos" ? "Receitas" : "Favoritos"}</Titulo>
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