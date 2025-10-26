import { Link, useNavigate } from 'react-router-dom'
import './botoesReceita.css'
import { useState } from 'react'
import PopUp from '../PopUp/popUp.jsx'
import { deleteReceita } from '../../services/receitasData.js'

function BotoesReceita({idReceita}) {
    const [isVisivel, setIsVisivel] = useState(false)
    const navigate = useNavigate();
    
    async function confirmarExclusao() {
        await deleteReceita(idReceita)
        navigate('/inicio')
    }

    return (
        
        <div className='container-botoes'>
            
            <PopUp 
                isVisivel={isVisivel}
                setIsVisivel={setIsVisivel}
                texto="Tem certeza que deseja apagar esta receita?"
                funcao={confirmarExclusao}
            />
            
            <Link className='botao-atualizar' to={`/atualizar/${idReceita}`}>Atualizar</Link>
            <button
                className='botao-deletar'
                onClick={() => {setIsVisivel(true)}}
            >Deletar</button>
        </div>
    )
}

export default BotoesReceita