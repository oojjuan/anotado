import './pagina.css'

function Pagina({ infoPagina, numPaginaAtual, idReceita }) {
    //* Representa quantos wallpapers diferentes existem
    const qtdTiposWallpapers = 4
    
    return (
        <section className={`caderno-receita ${numPaginaAtual ===  0 ? "capa" : "pagina"} tipo-n${idReceita % qtdTiposWallpapers + 1}`}>
            {infoPagina.componenteTitulo}
            {infoPagina.componenteInfo}
        </section>
    )
}

export default Pagina