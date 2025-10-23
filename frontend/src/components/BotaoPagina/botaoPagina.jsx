import './botaoPagina.css'

function BotaoPagina({idExibidos, setIdExibidos, listaElementos, limiteExibicoes, tipoOperacao}) {    
    
    function desativado(tipoOperacao) {
        let booleanAtivado        
        switch (tipoOperacao) {
            case "voltar":
                idExibidos[0] === 0 ? booleanAtivado = true : booleanAtivado = false    
                break;
            case "avancar":
                idExibidos[1] > listaElementos.length - 1 ? booleanAtivado = true : booleanAtivado = false
                break;
        }
        return booleanAtivado
    }
    
    return (
        <button 
            className={tipoOperacao === "voltar" ? "botoes-botao" : "botoes-botao invertido"}
            onClick={() => {
                switch (tipoOperacao) {
                    case "voltar":
                        //! Caso o valor MÍNIMO de elementos exibidos seja MENOR que 0 na próxima vez que for ativado, volta ao valor padrão
                        if(idExibidos[0] - limiteExibicoes < 0) {setIdExibidos([ 0, limiteExibicoes ])}
                        //! Senão fica 'valorMin = valorMin - cardLimite / valorMax = valorMax + cardLimite'
                        else {setIdExibidos([ idExibidos[0] - limiteExibicoes, limiteExibicoes])}
                        break;
                    
                    case "avancar":
                        //! Caso o valor MÁXIMO de elementos exibidos seja MAIOR que o valor TOTAL de elementos na próxima que vez for ativado, exibe os últimos valores da lista
                        if(idExibidos[1] + 1 > listaElementos.length) {setIdExibidos([listaElementos.length - limiteExibicoes - 1, listaElementos.length - 1])}
                        //! Senão fica 'valorMin = valorMin + cardLimite / valorMax = valorMax + cardLimite'
                        else {setIdExibidos([idExibidos[0] + limiteExibicoes, idExibidos[1] + limiteExibicoes])}
                        break;
                }
                console.log(`Lista de elementos: ${listaElementos}\nLista dos ids exibidos: ${idExibidos}`)
            }}
            disabled={desativado(tipoOperacao)}
        
        />
    )

}

export default BotaoPagina