import { useEffect, useState } from 'react'
import Pesquisa from '../../components/Pesquisa/pesquisa'
import Titulo from '../../components/Titulo/titulo'
import { getReceitas } from '../../services/receitasData.js'
import './Receitas.css'

function Receitas() {
    const [receitas, setReceitas] = useState([])
    const [receitasPesquisadas, setReceitasPesquisadas] = useState([])   
    const [idMinReceita, setIdMinReceita] = useState(0)

    //* Buscar receitas
    useEffect( () => {
        fetchReceitas()
    }, [])

    async function fetchReceitas() {
        const receitasAPI = await getReceitas()
        setReceitas(receitasAPI)
        //* Exibe as receitas na página ao carregar
        setReceitasPesquisadas(receitasAPI)
    }
    
    return (
        <main className='container-receitas'>
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="fino"
                fonteFamilia="principal"
                tipoTitulo="principal"
                fonteFormatacao="maiuscula"
            >Receitas</Titulo>
            <Pesquisa
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