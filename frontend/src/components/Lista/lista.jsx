import './lista.css'

function Lista({ lista }) {
    //* Armazena as chaves do objeto 'Lista'
    const keysLista = Object.keys(lista)

    return (
        <ul className={`lista-etapas tipo--${keysLista[1]}`}>
            {lista[keysLista[1]].map( (etapa, index) => (
                <li key={index} className='etapas-etapa'>{etapa}</li>
            ))}
        </ul>
    )
}

export default Lista