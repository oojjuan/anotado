import './secaoInicio.css'

function SecaoInicio({ direcao = "normal", titulo, texto, imgUrl}) {
    return (
        <div className={`container-secao ${direcao}`}>
            <img className='secao-img' src={imgUrl} alt='Logo do site' />
            <div className='secao-textos'>
                <h1 className="cor-claro peso-normal familia-enfase formato-maiuscula tamanho-2-5">{titulo}</h1>
                <p className='textos-texto'>{texto}</p>
            </div>
        </div>
    )
}

export default SecaoInicio