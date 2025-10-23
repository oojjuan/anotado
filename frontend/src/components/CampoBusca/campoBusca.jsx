import './campoBusca.css'

function CampoBusca({receitas, setReceitasPesquisada}) {

    return (
        <input 
            className='pesquisa-campo'
            placeholder='Digite a receita...'
            onChange={evento => {
                const textoInserido = evento.target.value.toLowerCase()
                if (textoInserido !== "") {
                    const resultadoPesquisa = receitas.filter( (receita) => receita.nome.toLowerCase().includes(textoInserido))
                    setReceitasPesquisada(resultadoPesquisa)
                } else {
                    setReceitasPesquisada(receitas)
                }
            }}
        />
    )
}

export default CampoBusca