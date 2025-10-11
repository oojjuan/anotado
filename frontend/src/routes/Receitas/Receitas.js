import Pesquisa from '../../components/Pesquisa/pesquisa'
import Titulo from '../../components/Titulo/titulo'
import './Receitas.css'

function Receitas() {
    return (
        <main className='container-receitas'>
            <Titulo fontSize='tamanho-principal' fontColor='fonte-escura' >Receitas</Titulo>
            <Pesquisa />
        </main>
    )
}

export default Receitas