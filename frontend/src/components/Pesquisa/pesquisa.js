import { useEffect, useState } from 'react'
import './pesquisa.css'
import { getReceitas } from '../../services/receitasData'

function Pesquisa() {
    const [receitas, setReceitas] = useState([])
    const [receitasPesquisada, setReceitasPesquisada] = useState([])   
    //* Controla quantas receitas serão exibidas de uma vez, de 9 em 9
    const [idReceitasExibidas, setIdReceitasExibidas] = useState([0, 9])

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
            <h2 className='pesquisa-titulo'>Pesquise o nome da receita que deseja fazer!</h2>
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
                
                { receitasPesquisada.slice(idReceitasExibidas[0], idReceitasExibidas[1]).map( (receita) => (
                    <div className='resultados-receita'>
                            <span className='receita-id'># {receita.id}</span>
                            <h2 className='receita-nome'>{receita.nome}</h2>
                            <p className='receita-categoria'>{receita.categoria}</p>
                    </div>
                ))}
            </div>
            <div className='container-botoes'>
                <button className='botoes-botao' 
                onClick={() => {
                    //! Caso o valor MÍNIMO de receitas exibidas seja MENOR que 0 na próxima vez que for ativado, volta ao valor padrão
                    if (idReceitasExibidas[0] - 9 < 0) { setIdReceitasExibidas([0, 9]) }
                    //! Senão fica valorMin = valorMin - 9 / valorMax = valorMax - 9
                    else { setIdReceitasExibidas([ idReceitasExibidas[0] - 9, idReceitasExibidas[1] - 9 ]) }
                }}
                disabled={ idReceitasExibidas[0] === 0 ? true : false } 
                />
                <button className='botoes-botao' 
                    onClick={() => {
                        //! Caso o valor MÁXIMO de receitas exibidas seja MAIOR que o valor TOTAL de receitas pesquisadas na próxima vez que for ativado, exibe os últimos valores da lista
                        if (idReceitasExibidas[1] + 1 > receitasPesquisada.length) { setIdReceitasExibidas([receitasPesquisada.length - 9 - 1, receitasPesquisada.length - 1]) }
                        //! Senão o valorMin = valorMin + 9 / valorMax = valorMax + 9
                        else { setIdReceitasExibidas([ idReceitasExibidas[0] + 9, idReceitasExibidas[1] + 9 ]) }
                    }}
                    disabled={ idReceitasExibidas[1] > receitasPesquisada.length - 1 ? true : false }
                />
            </div>
        </section>
    )
}

export default Pesquisa