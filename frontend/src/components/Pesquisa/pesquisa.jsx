import './pesquisa.css'
import Resultados from '../Resultados/resultados.jsx'
import BotaoPagina from '../BotaoPagina/botaoPagina.jsx'
import CampoBusca from '../CampoBusca/campoBusca.jsx'
import { useState, useEffect } from 'react'

function Pesquisa({receitas, receitasPesquisadas, setReceitasPesquisadas, idMinReceita, setIdMinReceita, tipo}) {
    const [cardLimite, setCardLimite] = useState(6)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setCardLimite(3)
            } else {
                setCardLimite(6)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return (
        <section className='container-pesquisa'>
            <h2 className="cor-escuro peso-negrito familia-enfase formato-maiuscula tamanho-2-25">{tipo !== "favoritos" ? "Procure a receita que você quiser!" : "Procure pela sua receita favorita!"}</h2>
            <CampoBusca receitas={receitas} setReceitasPesquisada={setReceitasPesquisadas}/>
            <Resultados tipo={tipo} listaResultado={receitasPesquisadas} minimoReceitasExibidas={idMinReceita} cardLimite={cardLimite}/>
            <div className='container-botoes pesquisa'>
                <BotaoPagina 
                    idMinExibido={idMinReceita}
                    setIdMinExibido={setIdMinReceita}
                    qtdElementos={receitasPesquisadas.length}
                    limiteExibicoes={cardLimite}
                    tipoOperacao="voltar"
                    tamanho="pequeno"
                    className="pesquisa-page"
                />
                <BotaoPagina 
                    idMinExibido={idMinReceita}
                    setIdMinExibido={setIdMinReceita}
                    qtdElementos={receitasPesquisadas.length}
                    limiteExibicoes={cardLimite}
                    tipoOperacao="avancar"
                    tamanho="pequeno"
                    className="pesquisa-page"
                />
            </div>
        </section>
    )
}

export default Pesquisa