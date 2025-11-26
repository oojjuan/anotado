import './Criar.css'
import Titulo from '../../components/Titulo/titulo.jsx'
import Formulario from '../../components/Formulario/formulario.jsx'

function Criar() {
    return (
        <main className='container-criar'>
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="fino"
                fonteFamilia="principal"
                tipoTitulo="principal"
                fonteFormatacao="maiuscula"
            >Criar</Titulo>
            
            <Formulario/>
        </main>


    )
}

export default Criar