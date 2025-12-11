import Titulo from '../Titulo/titulo'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <Titulo
                fonteTamanho='1.75'
                fonteCor='claro'
                fonteFamilia='principal'
                fonteFormatacao='normal'
                tipoTitulo='principal'
                fontePeso='fino'
            >Feito por: Juan Francisco Alves Muradas</Titulo>
        </footer>
    )
}

export default Footer