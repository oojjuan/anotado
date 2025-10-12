import { Link } from 'react-router-dom'
import './resultado.css'
import Titulo from '../Titulo/titulo'

function Resultado({ listaResultado, idReceitasExibidas }) {
    if ( listaResultado.length !== 0) {
        return (
        <div className='container-resultados--preenchido'>
            { listaResultado.slice(idReceitasExibidas[0], idReceitasExibidas[1]).map( (receita, index) => (
                <Link className='resultados-receita' to={`/receitas/${receita.id}`} key={index}>
                    <span className='receita-id'># {receita.id}</span>
                    <h2 className='receita-nome'>{receita.nome}</h2>
                    <p className='receita-categoria'>{receita.categoria}</p>
                </Link>
            ))}
        </div>
    )
    } else {
        return (
            <div className='container-resultados--vazio'>
                <Titulo fontSize='tamanho-enfase' fontColor='fonte-escura'>
                    {"Nenhuma receita foi encontrada ;("}
                </Titulo>
            </div>
        )
    }
}

export default Resultado