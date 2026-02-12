import './popUp.css'

function PopUp({texto, isVisivel , setIsVisivel, funcao }) {
    return (
        <div className={`background-popup ${isVisivel ? "mostrar" : ""}`}>
            <div className='container-popup'>
                <h2 className="cor-escuro peso-normal familia-principal formato-normal tamanho-2-5">{texto}</h2>
                <div className='popup-botoes'>
                    <button className='botao-confirmar' onClick={funcao}>Confirmar</button>
                    <button className='botao-voltar' onClick={() => setIsVisivel(false)} >Voltar</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp