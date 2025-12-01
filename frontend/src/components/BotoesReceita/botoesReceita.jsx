import { Link, useNavigate } from 'react-router-dom'
import './botoesReceita.css'
import { useState } from 'react'
import PopUp from '../PopUp/popUp.jsx'
import { deleteReceita } from '../../services/receitasData.js'

function BotoesReceita({idReceita}) {
    const navigate = useNavigate();
    const [isVisivel, setIsVisivel] = useState(false)
    
    async function confirmarExclusao() {
        await deleteReceita(idReceita)
        navigate('/receitas')
    }

    return (
        
        <div className='container-botoes'>
            
            <PopUp 
                isVisivel={isVisivel}
                setIsVisivel={setIsVisivel}
                texto="Tem certeza que deseja apagar esta receita?"
                funcao={confirmarExclusao}
            />
            
            <Link className='botao-atualizar' to={`/editar/${idReceita}`}>Atualizar</Link>
            {/*
            //TODO: Fazer botão de favoritar a receita, que salva no sistema
            */}
            <button
                className='botao-deletar'
                onClick={() => {setIsVisivel(true)}}
            >Deletar</button>
        </div>
    )
}

export default BotoesReceita