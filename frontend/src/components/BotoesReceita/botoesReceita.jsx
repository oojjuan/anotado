import { Link, useNavigate } from 'react-router-dom'
import './botoesReceita.css'
import { useEffect, useState } from 'react'
import PopUp from '../PopUp/popUp.jsx'
import { deleteReceita, getReceita } from '../../services/receitasData.js'
import { deleteFavorito, getFavoritos, postFavoritos } from '../../services/favoritosData.js'

function BotoesReceita({idReceita}) {
    const navigate = useNavigate();
    const [isVisivel, setIsVisivel] = useState(false)
    const [isFavorito, setIsFavorito] = useState()
    
    async function confirmarExclusao() {
        await deleteReceita(idReceita)
        navigate('/receitas')
    }

    async function favoritar() {
        if (isFavorito) {
            deleteFavorito(idReceita)
            setIsFavorito(false)
            return
        }

        if (!isFavorito) {
            const receita = await getReceita(idReceita)
            postFavoritos(receita)
            setIsFavorito(true)
            return
        }
    }

    useEffect(() => {
        async function fetchFavoritos() {
            const favoritos = await getFavoritos()
            const idFavoritos = new Set(favoritos.map(favorito => favorito.id))
            if (idFavoritos.has(idReceita)) {
                setIsFavorito(true)
            } else {
                setIsFavorito(false)
            }
        }

        fetchFavoritos()
    }, [idReceita])
    

    return (
        
        <div className='container-botoes'>
            
            <PopUp 
                isVisivel={isVisivel}
                setIsVisivel={setIsVisivel}
                texto="Tem certeza que deseja apagar esta receita?"
                funcao={confirmarExclusao}
            />
            
            <Link className='botao-atualizar' to={`/editar/${idReceita}`}>Atualizar</Link>
            
            <button
                className="botao-favoritar"
                onClick={() => {favoritar()}}
            >{isFavorito ? "☆ Desfavoritar" : "★ Favoritar"}</button>

            <button
                className='botao-deletar'
                onClick={() => {setIsVisivel(true)}}
            >Deletar</button>
        </div>
    )
}

export default BotoesReceita