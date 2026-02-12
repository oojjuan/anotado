import './Criar.css'
import Formulario from '../../components/Formulario/formulario.jsx'
import { useParams } from 'react-router-dom'

function Criar() {
    const { idReceita } = useParams();

    return (
        <main className='container-criar'>
            <h1 className="cor-escuro peso-fino familia-principal formato-maiuscula tamanho-2-25">{idReceita ? "Editar" : "Criar"}</h1>

            <Formulario modo={idReceita ? "editar" : "criar"}/>
        </main>


    )
}

export default Criar