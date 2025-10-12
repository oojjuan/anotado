import { useEffect, useState } from 'react'
import './pesquisa.css'
import { getReceitas } from '../../services/receitasData'
import Titulo from '../Titulo/titulo.js'
import Resultado from '../Resultado/resultado.js'
import BotoesPaginas from '../BotaoPaginas/botoesPaginas.js'
import CampoBusca from '../CampoBusca/campoBusca.js'

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
            <Titulo fontSize='tamanho-enfase' fontColor='fonte-escura' >Digite o nome da receita que desejar!</Titulo>
            <CampoBusca receitas={receitas} setReceitasPesquisada={setReceitasPesquisada}/>
            <Resultado listaResultado={receitasPesquisada} idReceitasExibidas={idReceitasExibidas}/>
            <BotoesPaginas idReceitasExibidas={idReceitasExibidas} setIdReceitasExibidas={setIdReceitasExibidas} receitasPesquisada={receitasPesquisada} cardLimite={6}/>
        </section>
    )
}

export default Pesquisa