import './pagina.css'

function Pagina({ infoPagina, numPaginaAtual, idReceita }) {
    //* Representa quantos wallpapers diferentes existem
    const qtdTiposWallpapers = 4
    
    return (
        <section className={`caderno-receita ${numPaginaAtual ===  0 ? "capa" : "pagina"} tipo-n${idReceita % qtdTiposWallpapers + 1}`}>
            {
                //TODO: Fazer com que seja exibido apenas um dos objetos de 'infoPaginas'
                //TODO: Fazer com que seja exibido TODOS os elementos da lista de 'listaIngredientes' e 'modoPreparo'
            }
            {infoPagina.componenteTitulo}

            {infoPagina.componenteInfo}

            {
                //TODO: Fazer botões para excluir ou modificar a receita
            }
        </section>
    )
}

export default Pagina