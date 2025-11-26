import './botaoPagina.css'

function BotaoPagina({idMinExibido, setIdMinExibido, qtdElementos, limiteExibicoes, tipoOperacao, tamanho}) {    
    
    function desativado(tipoOperacao) {
        let booleanAtivado        
        switch (tipoOperacao) {
            case "voltar":
                idMinExibido === 0 ? booleanAtivado = true : booleanAtivado = false    
                break;
            case "avancar":
                idMinExibido + limiteExibicoes > qtdElementos - 1 ? booleanAtivado = true : booleanAtivado = false
                break;
            default:
                break;
        }
        return booleanAtivado
    }
    
    return (
        <button 
            className={`botoes-botao ${tamanho}`}
            onClick={() => {
                switch (tipoOperacao) {
                    case "voltar" :
                        //! Se na próxima vez o valor do idMinExibido for menor que 0, retorna 0
                        if(idMinExibido - limiteExibicoes < 0) { setIdMinExibido(0) }
                        //! Caso o contrário, retorna o próximo valor a ser exibido
                        else {setIdMinExibido(idMinExibido - limiteExibicoes)}
                        break;
                    case "avancar":
                        //! Se na próxima vez o valor do idMinExibido for maior que o número de elementos da lista principal, retorna o valor máximo da lista principal
                        if(idMinExibido + limiteExibicoes > qtdElementos - 1) { setIdMinExibido(qtdElementos - 1) }
                        //! Caso o contrário, retorna o próximo valor a ser exibido
                        else {setIdMinExibido(idMinExibido + limiteExibicoes)}
                        break;
                    default:
                        break;
                }
            }}
            disabled={desativado(tipoOperacao)}
        >{tipoOperacao === "voltar" ? "<" : ">"}</button>
    )
}

export default BotaoPagina