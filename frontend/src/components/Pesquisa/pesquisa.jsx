import { useEffect, useState } from 'react'
import './pesquisa.css'
import { getReceitas } from '../../services/receitasData.js'
import Titulo from '../Titulo/titulo.jsx'
import Resultados from '../Resultados/resultados.jsx'
import BotoesPaginas from '../BotaoPaginas/botoesPaginas.jsx'
import CampoBusca from '../CampoBusca/campoBusca.jsx'

function Pesquisa() {
    const [receitas, setReceitas] = useState([])
    const [receitasPesquisada, setReceitasPesquisada] = useState([])   
    const cardLimite = 6
    const [idReceitasExibidas, setIdReceitasExibidas] = useState([0, cardLimite])

    //* Buscar receitas
    useEffect( () => {
        fetchReceitas()
    }, [])

    async function fetchReceitas() {
        const receitasAPI = await getReceitas()
        setReceitas(receitasAPI)
        //* Exibe as receitas na página ao carregar
        setReceitasPesquisada(receitasAPI)
    }
    
    return (
        <section className='container-pesquisa'>
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="negrito"
                fonteFamilia="enfase"
                fonteFormatacao="maiuscula"
            >Digite o nome da receita que desejar!</Titulo>
            <CampoBusca receitas={receitas} setReceitasPesquisada={setReceitasPesquisada}/>
            <Resultados listaResultado={receitasPesquisada} idReceitasExibidas={idReceitasExibidas}/>
            <BotoesPaginas idReceitasExibidas={idReceitasExibidas} setIdReceitasExibidas={setIdReceitasExibidas} receitasPesquisada={receitasPesquisada} cardLimite={6}/>
        </section>
    )
}

export default Pesquisa