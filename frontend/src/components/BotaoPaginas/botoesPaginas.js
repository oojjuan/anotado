import './botoesPaginas.css'

function BotoesPaginas({idReceitasExibidas, setIdReceitasExibidas, receitasPesquisada, cardLimite}) {    
    return (
        <div className='container-botoes'>
            <button className='botoes-botao' 
                onClick={() => {
                    //! Caso o valor MÍNIMO de receitas exibidas seja MENOR que 0 na próxima vez que for ativado, volta ao valor padrão
                    if (idReceitasExibidas[0] - cardLimite < 0) { setIdReceitasExibidas([0, cardLimite]) }
                    //! Senão fica valorMin = valorMin - cardLimite / valorMax = valorMax - cardLimite
                    else { setIdReceitasExibidas([ idReceitasExibidas[0] - cardLimite, idReceitasExibidas[1] - cardLimite ]) }
                }}
                disabled={ idReceitasExibidas[0] === 0 ? true : false } 
            />
            <button className='botoes-botao' 
                onClick={() => {
                    //! Caso o valor MÁXIMO de receitas exibidas seja MAIOR que o valor TOTAL de receitas pesquisadas na próxima vez que for ativado, exibe os últimos valores da lista
                    if (idReceitasExibidas[1] + 1 > receitasPesquisada.length) { setIdReceitasExibidas([receitasPesquisada.length - cardLimite - 1, receitasPesquisada.length - 1]) }
                    //! Senão o valorMin = valorMin + cardLimite / valorMax = valorMax + cardLimite
                    else { setIdReceitasExibidas([ idReceitasExibidas[0] + cardLimite, idReceitasExibidas[1] + cardLimite ]) }
                }}
                disabled={ idReceitasExibidas[1] > receitasPesquisada.length - 1 ? true : false }
            />
        </div>
    )
}

export default BotoesPaginas