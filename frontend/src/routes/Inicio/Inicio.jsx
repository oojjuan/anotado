import SecaoInicio from '../../components/SecaoInicio/secaoInicio'
import Imagem1 from '../../imgs/Logo.png'
import Imagem2 from '../../imgs/LivroReceita.png'
import './Inicio.css'
import Titulo from '../../components/Titulo/titulo'

//<> Textos para as seções

const textoSecoes = [
    {
        imgUrl: Imagem1,
        titulo: "Seja bem vindo/a!",
        texto: "Se você procura um lugar para guardar as suas receitas favoritas, então você veio ao lugar certo! O 'Anotado' será o seu livro de receitas, onde você tem total liberdade para criar e alterar as receitas que forem sendo salvas por você!"
    },
    {
        imgUrl: Imagem2,
        titulo: "Como funciona?",
        texto: "O 'Anotado' é bem simples, basta você criar a sua receita na página de criação e voilà, fica salvo no sistema! Além disso, você pode modificar as receitas, caso tenha esquecido de algo, e também deletar ou favoritar as receitas que você mais gosta!"
    }
]


function Inicio() {
    return (
        <main className="container-inicio">
            <Titulo
                fonteTamanho="2.25"
                fonteCor="escuro"
                fontePeso="fino"
                fonteFamilia="principal"
                tipoTitulo="principal"
                fonteFormatacao="maiuscula"
            >Início</Titulo>
            { textoSecoes.map( (secao, index) => (
                <SecaoInicio key={index} direcao={(index % 2 === 0 ? 'normal' : 'reverso')} titulo={secao.titulo} texto={secao.texto} imgUrl={secao.imgUrl}/>
            )) }
        </main>
    )
}

export default Inicio