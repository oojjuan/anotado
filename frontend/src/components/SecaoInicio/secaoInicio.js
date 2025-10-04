import './secaoInicio.css'

function SecaoInicio({ direcao = "normal", titulo, texto, imgUrl}) {
    return (
        <div className={`container-secao ${direcao}`}>
            <img className='secao-img' src={imgUrl} alt='Logo do site' />
            <div className='secao-textos'>
                <h2 className='textos-titulo'>{titulo}</h2>
                <p className='textos-texto'>{texto}</p>
            </div>
        </div>
    )
}

export default SecaoInicio