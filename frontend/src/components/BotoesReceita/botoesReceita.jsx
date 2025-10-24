import { Link } from 'react-router-dom'
import './botoesReceita.css'

function BotoesReceita({idReceita}) {
    return (
        <div className='container-botoes'>
            <Link className='botao-modificar'>Atualizar</Link>
            <button className='botao-deletar'>Deletar</button>
        </div>
    )
}

export default BotoesReceita