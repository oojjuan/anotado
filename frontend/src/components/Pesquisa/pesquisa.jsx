import './pesquisa.css'
import Titulo from '../Titulo/titulo.jsx'
import Resultados from '../Resultados/resultados.jsx'
import BotaoPagina from '../BotaoPagina/botaoPagina.jsx'
import CampoBusca from '../CampoBusca/campoBusca.jsx'

function Pesquisa({receitas, receitasPesquisadas, setReceitasPesquisadas, idMinReceita, setIdMinReceita}) {
    const cardLimite = 6
    
    return (
        <section className='container-pesquisa'>
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="negrito"
                fonteFamilia="enfase"
                fonteFormatacao="maiuscula"
            >Digite o nome da receita que desejar!</Titulo>
            <CampoBusca receitas={receitas} setReceitasPesquisada={setReceitasPesquisadas}/>
            <Resultados listaResultado={receitasPesquisadas} minimoReceitasExibidas={idMinReceita} cardLimite={cardLimite}/>
            <div className='container-botoes'>
                <BotaoPagina 
                    idMinExibido={idMinReceita}
                    setIdMinExibido={setIdMinReceita}
                    qtdElementos={receitasPesquisadas.length}
                    limiteExibicoes={cardLimite}
                    tipoOperacao="voltar"
                    tamanho="pequeno"
                />
                <BotaoPagina 
                    idMinExibido={idMinReceita}
                    setIdMinExibido={setIdMinReceita}
                    qtdElementos={receitasPesquisadas.length}
                    limiteExibicoes={cardLimite}
                    tipoOperacao="avancar"
                    tamanho="pequeno"
                />
            </div>
        </section>
    )
}

export default Pesquisa