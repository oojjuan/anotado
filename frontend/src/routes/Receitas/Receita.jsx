import { useParams } from "react-router-dom"
import { getReceita } from "../../services/receitasData"
import { useEffect, useState } from "react"
import './Receita.css'
import Lista from "../../components/Lista/lista.jsx"
import BotoesReceita from "../../components/BotoesReceita/botoesReceita.jsx"
import Pagina from "../../components/Pagina/pagina.jsx"
import BotaoPagina from "../../components/BotaoPagina/botaoPagina.jsx"


function Receita() {
    const { idReceita } = useParams()
    const [receita, setReceita] = useState()
    const [paginaAtual, setPaginaAtual] = useState(0)


    useEffect(() => {
        async function fetchReceita() {
            const receitaAPI = await getReceita(idReceita)
            setReceita(receitaAPI)
        }
        fetchReceita()
    }, [idReceita])

    
    function gerarInfosListas(lista) {                
        const chavesLista = Object.keys(lista)
        const tituloLista = chavesLista[1] === "ingredientes" ? "Lista de ingredientes" : "Modo de Preparo"
        
        const etapasLista = lista.map((etapa, index) => ({
            componenteTitulo: 
                <h2 
                    className="info-titulo cor-escuro peso-fino familia-principal formato-maiuscula tamanho-2-5"
                >{`${tituloLista} (${index + 1}/${chavesLista.length})`}</h2>,
            componenteInfo: 
                <div className="container-info info-componente">
                    <h2 
                        className="cor-escuro peso-fino familia-principal formato-maiuscula tamanho-2-5"
                    >{etapa.preparo}</h2>
                    
                    <Lista lista={etapa}/>
                </div>
        }))

        return etapasLista
    }
    
    //* Mensagem caso as informações da receita não carreguem a tempo
    if (!receita) {
        return <h1 className="cor-escuro peso-fino familia-principal formato-maiuscula tamanho-3 mensagem-aguardo">Carregando receita...</h1>
    } 
    
    else {        
        const infoPaginas = [
            {
                componenteTitulo: <h1 
                    className="info-titulo cor-claro peso-fino familia-principal formato-maiuscula tamanho-2-5"
                >{receita.nome}</h1>,

                componenteInfo: 
                    <div className="container-info info-componente">
                        <h2
                            className="info-categoria cor-claro peso-fino familia-enfase formato-maiuscula tamanho-2-5"
                        >Receita de {receita.categoria}</h2>

                        <BotoesReceita idReceita={receita.id}/>
                    </div>
            },
            ...gerarInfosListas(receita.listaIngredientes),
            ...gerarInfosListas(receita.modoPreparo)
        ]

        const qtdPaginas = infoPaginas.length

        return (
            <main className="container-receita">
                <BotaoPagina
                    idMinExibido={paginaAtual}
                    setIdMinExibido={setPaginaAtual}
                    qtdElementos={qtdPaginas}
                    limiteExibicoes={1}
                    tipoOperacao="voltar"
                    tamanho="grande"
                    className="esquerdo receita-page"
                />

                <Pagina
                    idReceita={receita.id}
                    infoPagina={infoPaginas[paginaAtual]}
                    numPaginaAtual={paginaAtual}
                />

                <BotaoPagina
                    idMinExibido={paginaAtual}
                    setIdMinExibido={setPaginaAtual}
                    qtdElementos={qtdPaginas}
                    limiteExibicoes={1}
                    tipoOperacao="avancar"
                    tamanho="grande"
                    className="direito receita-page"
                />
            </main>
        )
    }
}

export default Receita