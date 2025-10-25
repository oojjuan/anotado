import { Link } from 'react-router-dom'
import './resultado.css'
import Titulo from '../Titulo/titulo.jsx'

function Resultados({ listaResultado, minimoReceitasExibidas, cardLimite }) {
    if ( listaResultado !== 0) {
        return (
        <div className='container-resultados preenchido'>
            { listaResultado.slice(minimoReceitasExibidas, minimoReceitasExibidas + cardLimite).map( (receita, index) => (
                <Link className='resultados-receita' to={`/receitas/${receita.id}`} key={index}>
                    <span className='receita-id'># {receita.id}</span>
                    <Titulo
                        fonteTamanho="1.5"
                        fonteCor="escuro"
                        fontePeso="negrito"
                        fonteFamilia="texto"
                        fonteFormatacao="maiuscula"
                    >{receita.nome}</Titulo>
                    <p className='receita-categoria'>{receita.categoria}</p>
                </Link>
            ))}
        </div>
    )
    } else {
        return (
            <div className='container-resultados vazio'>
                <Titulo
                    fonteTamanho="2.5"
                    fonteCor="escuro"
                    fontePeso="negrito"
                    fonteFamilia="enfase"
                    fonteFormatacao="maiuscula"
                >
                    Nenhuma receita foi encontrada...
                </Titulo>
            </div>
        )
    }
}

export default Resultados