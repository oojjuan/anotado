import { Link } from 'react-router-dom'
import './resultado.css'

function Resultados({ listaResultado, minimoReceitasExibidas, cardLimite, tipo }) {
    if ( listaResultado.length !== 0) {
        return (
        <div className='container-resultados preenchido'>
            { listaResultado.slice(minimoReceitasExibidas, minimoReceitasExibidas + cardLimite).map( (receita, index) => (
                <Link className={`resultados-receita ${tipo}`} to={`/receitas/${receita.id}`} key={index}>
                    <span className='receita-id'># {receita.id}</span>
                    <h2 className={`receita-nome peso-negrito familia-texto formato-maiuscula tamanho-1-5 ${tipo === "favoritos" ? "cor-claro" : "cor-escuro"}`}>{receita.nome}</h2>
                    <p className={`receita-categoria ${tipo}`}>{receita.categoria}</p>
                </Link>
            ))}
        </div>
    )
    } else {
        return (
            <div className='container-resultados vazio'>
                <h2 className="cor-escuro peso-negrito familia-enfase formato-maiuscula tamanho-2-5">Nenhuma receita foi encontrada...</h2>
            </div>
        )
    }
}

export default Resultados