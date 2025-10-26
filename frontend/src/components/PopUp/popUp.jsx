import './popUp.css'
import Titulo from '../Titulo/titulo.jsx'

function PopUp({texto, isVisivel , setIsVisivel, funcao }) {
    return (
        <div className={`background-popup ${isVisivel ? "mostrar" : ""}`}>
            <div className='container-popup'>
                <Titulo 
                    fonteTamanho="2.5"
                    fonteCor="escuro"
                    fontePeso="normal"
                    fonteFamilia="principal"
                    fonteFormatacao="normal"
                >{texto}</Titulo>
                <div className='popup-botoes'>
                    <button className='botao-confirmar' onClick={funcao}>Confirmar</button>
                    <button className='botao-voltar' onClick={() => setIsVisivel(false)} >Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp