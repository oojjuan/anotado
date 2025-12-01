import { useForm } from 'react-hook-form'
import './formulario.css'
import { postReceita } from '../../services/criarData'
import Fields from '../ArrayFields/fieldArray'
import { useNavigate, useParams } from 'react-router-dom';
import { putReceita } from '../../services/editarData';
import { getReceita } from '../../services/receitasData';
import { useEffect, useState } from 'react';
import Titulo from '../Titulo/titulo';

function Formulario({ modo }) {
    const navigate = useNavigate();
    const { idReceita } = useParams();
    const [ receita, setReceita ] = useState();

    const {control, register, handleSubmit, formState: {errors}, getValues, setValue, reset} = useForm({defaultValues: estruturaForm(undefined)})
    
    useEffect(() => {
            async function fetchReceita() {
                const receitaAPI = await getReceita(idReceita)
                setReceita(receitaAPI)

                if (receitaAPI) {
                    reset(estruturaForm(receitaAPI))
                }

            }
            if (modo === "editar") {
                fetchReceita()
            }
            
        }, [idReceita, reset])

    function estruturaForm(receita) {
        if (!receita) {
            return {
                categoria: "",
                nome: "",
                listaIngredientes: [
                    {
                        preparo: "",
                        ingredientes: [{textos: ""}]
                    }
                ],
                modoPreparo: [
                    {
                        preparo: "",
                        etapas: [{textos: ""}]
                    }
                ]
            }
        } 
        return {
            categoria: receita.categoria,
            nome: receita.nome,
            listaIngredientes: receita.listaIngredientes.map(lista => ({
                preparo: lista.preparo,
                ingredientes: lista.ingredientes.map(ingrediente => ({textos: ingrediente}))
            })),
            modoPreparo: receita.modoPreparo.map(lista => ({
                preparo: lista.preparo,
                etapas: lista.etapas.map(etapa => ({textos: etapa}))
            }))
        }
    }

    //* Função de envio de dados para o backend
    const onSubmit = (data) => {
        switch (modo) {
            case "criar":
                postReceita(data)
                navigate('/receitas')
                break;
        
            case "editar":
                console.log(data)
                putReceita(receita.id, data)
                navigate(`/receitas/${receita.id}`)
                break;
        }
    }

    if (!receita && modo === "editar") {
        return <Titulo
            fonteTamanho="3"
            fonteCor="escuro"
            fontePeso="fino"
            fonteFamilia="principal"
            fonteFormatacao="maiuscula"
            tipoTitulo="principal"
            className="mensagem-aguardo"
        >Carregando receita...</Titulo>

    } else {
        return (
            <form className={`container-formulario ${modo}`} onSubmit={handleSubmit(onSubmit)}>
                <section className='container-formulario--titulo'>
                    
                    <div className='container--titulo'>
                        <label className={`formulario-label ${modo}`}>Categoria</label>
                        <input
                            className={`formulario-input ${modo} ${ (errors.categoria) ? "input-erro" : ""}`}
                            {...register("categoria", {required: "Campo obrigatório", minLength: 3, maxLength: 16})}
                            placeholder="Ex: Bolo, Torta..."
                        />
                        {errors.categoria && 
                        (<p className='formulario-erro'>{errors.categoria.message}</p>)}
                    </div>
                    
                    <div className='container--titulo'>
                        <label className={`formulario-label ${modo}`}>Nome</label>
                        <input
                            className={`formulario-input ${modo} ${ (errors.nome) ? "input-erro" : ""}`}
                            {...register("nome", {required: "Campo obrigatório", minLength: 6, maxLength: 31})}
                            placeholder='Ex: Bolo de cenoura...'
                        />
                        {errors.nome && 
                        (<p className='formulario-erro'>{errors.nome.message}</p>)}
                    </div>
    
                </section>
    
                <section className='container-formulario--listas'>
                    <Fields
                        {...{control, register, errors, getValues, setValue, nomeLista: 'listaIngredientes'}}
                    />
                    <Fields 
                        {...{control, register, errors, getValues, setValue, nomeLista: 'modoPreparo'}}
                    />
                </section>
    
                <input className={`botao-enviar ${modo}`} type='submit' value="Anotar"/>
            </form>
        )
    }
}

export default Formulario