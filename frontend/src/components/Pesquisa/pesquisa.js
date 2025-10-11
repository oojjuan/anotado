import { useEffect, useState } from 'react'
import './pesquisa.css'
import { getReceitas } from '../../services/receitasData'
import { Link } from 'react-router-dom'
import Titulo from '../Titulo/titulo.js'

function Pesquisa() {
    const [receitas, setReceitas] = useState([])
    const [receitasPesquisada, setReceitasPesquisada] = useState([])   
    //* Controla quantas receitas serão exibidas de uma vez
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
            <input 
                className='pesquisa-campo'
                placeholder='Digite a receita...'
                onChange={evento => {
                    const textoInserido = evento.target.value.toLowerCase()

                    if (textoInserido !== "") {
                        const resultadoPesquisa = receitas.filter( (receita) => receita.nome.toLowerCase().includes(textoInserido))

                        setReceitasPesquisada(resultadoPesquisa)
                    } else {
                        setReceitasPesquisada(receitas)
                        
                    }
                }}
            />
            <div className='container-resultados'>
                { receitasPesquisada.slice(idReceitasExibidas[0], idReceitasExibidas[1]).map( (receita, index) => (
                    <Link className='resultados-receita' to={`/receitas/${receita.id}`} key={index}>
                            <span className='receita-id'># {receita.id}</span>
                            <h2 className='receita-nome'>{receita.nome}</h2>
                            <p className='receita-categoria'>{receita.categoria}</p>
                    </Link>
                ))}
            </div>
            <div className='container-botoes'>
                <button className='botoes-botao' 
                    onClick={() => {
                        //! Caso o valor MÍNIMO de receitas exibidas seja MENOR que 0 na próxima vez que for ativado, volta ao valor padrão
                        if (idReceitasExibidas[0] - cardLimite < 0) { setIdReceitasExibidas([0, cardLimite]) }
                        //! Senão fica valorMin = valorMin - cardLimite / valorMax = valorMax - cardLimite
                        else { setIdReceitasExibidas([ idReceitasExibidas[0] - cardLimite, idReceitasExibidas[1] - cardLimite ]) }
                    }}
                    disabled={ idReceitasExibidas[0] === 0 ? true : false } 
                />
                <button className='botoes-botao' 
                    onClick={() => {
                        //! Caso o valor MÁXIMO de receitas exibidas seja MAIOR que o valor TOTAL de receitas pesquisadas na próxima vez que for ativado, exibe os últimos valores da lista
                        if (idReceitasExibidas[1] + 1 > receitasPesquisada.length) { setIdReceitasExibidas([receitasPesquisada.length - cardLimite - 1, receitasPesquisada.length - 1]) }
                        //! Senão o valorMin = valorMin + cardLimite / valorMax = valorMax + cardLimite
                        else { setIdReceitasExibidas([ idReceitasExibidas[0] + cardLimite, idReceitasExibidas[1] + cardLimite ]) }
                    }}
                    disabled={ idReceitasExibidas[1] > receitasPesquisada.length - 1 ? true : false }
                />
            </div>
        </section>
    )
}

export default Pesquisa