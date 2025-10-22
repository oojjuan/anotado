import Titulo from '../Titulo/titulo'
import './secaoInicio.css'

function SecaoInicio({ direcao = "normal", titulo, texto, imgUrl}) {
    return (
        <div className={`container-secao ${direcao}`}>
            <img className='secao-img' src={imgUrl} alt='Logo do site' />
            <div className='secao-textos'>
                <Titulo
                    fonteTamanho="2.5"
                    fonteCor="claro"
                    fontePeso="normal"
                    fonteFamilia="enfase"
                    fonteFormatacao="maiuscula"
                    tipoTitulo="principal"
                >{titulo}</Titulo>
                <p className='textos-texto'>{texto}</p>
            </div>
        </div>
    )
}

export default SecaoInicio