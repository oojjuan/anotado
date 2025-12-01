import './Criar.css'
import Titulo from '../../components/Titulo/titulo.jsx'
import Formulario from '../../components/Formulario/formulario.jsx'
import { useParams } from 'react-router-dom'

function Criar() {
    const { idReceita } = useParams();

    return (
        <main className='container-criar'>
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="fino"
                fonteFamilia="principal"
                tipoTitulo="principal"
                fonteFormatacao="maiuscula"
            >{idReceita ? "Editar" : "Criar"}</Titulo>

            <Formulario modo={idReceita ? "editar" : "criar"}/>
        </main>


    )
}

export default Criar