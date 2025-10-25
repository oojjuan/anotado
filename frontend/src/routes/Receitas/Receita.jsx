import { useParams } from "react-router-dom"
import { getReceita } from "../../services/receitasData"
import { useEffect, useState } from "react"
import Titulo from '../../components/Titulo/titulo.jsx'
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
                <Titulo 
                    fonteTamanho="2.5"
                    fonteCor="escuro"
                    fontePeso="fino"
                    fonteFamilia="principal"
                    fonteFormatacao="maiuscula"
                    tipoTitulo="principal"
                >{`${tituloLista} | (${index + 1}/${chavesLista.length})`}</Titulo>
            ,
            componenteInfo: 
                <div className="container-info">
                    <Titulo 
                        fonteTamanho="2.5"
                        fonteCor="escuro"
                        fontePeso="fino"
                        fonteFamilia="principal"
                        fonteFormatacao="maiuscula"
                        tipoTitulo="principal"
                    >{etapa.preparo}</Titulo>
                    
                    <Lista lista={etapa}/>
                </div>
            
        }))

        return etapasLista
    }

    //TODO: Fazer uma mensagem que é exibida quando o sistema não encontra a receita da URL
    
    //* Mensagem caso as informações da receita não carreguem a tempo
    if (!receita) {
        return <Titulo
            fonteTamanho="3"
            fonteCor="escuro"
            fontePeso="fino"
            fonteFamilia="principal"
            fonteFormatacao="maiuscula"
            tipoTitulo="principal"
            className="mensagem-aguardo"
        >Carregando receita...</Titulo>
    } 
    
    else {        
        const infoPaginas = [
            {
                componenteTitulo: <Titulo 
                    fonteTamanho="2.5"
                    fonteCor="claro"
                    fontePeso="fino"
                    fonteFamilia="principal"
                    fonteFormatacao="maiuscula"
                    tipoTitulo="principal"
                >{receita.nome}</Titulo>,

                componenteInfo: 
                    <div className="container-info">
                        <Titulo
                            fonteTamanho="2.5"
                            fonteCor="claro"
                            fontePeso="fino"
                            fonteFamilia="enfase"
                            fonteFormatacao="maiuscula"
                            className="info-categoria"
                        >Receita de {receita.categoria}</Titulo>

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
                />
            </main>
        )
    }
}

export default Receita