import { useForm } from 'react-hook-form'
import './formulario.css'
import { postReceita } from '../../services/criarData'
import Fields from '../ArrayFields/fieldArray'
import { useNavigate } from 'react-router-dom';

function Formulario() {
    const navigate = useNavigate();

    //* Estrutura padrão do formulário
    const defaultValues = {
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
                    etapa: [{textos: ""}]
                }
            ]
        }

    const {control, register, handleSubmit, formState: {errors}, getValues, setValue} = useForm({defaultValues})


    //* Função de envio de dados para o backend
    const onSubmit = (data) => {
        postReceita(data)
        navigate('/receitas')
    }

    return (
        <form className='container-formulario' onSubmit={handleSubmit(onSubmit)}>
            <section className='container-formulario--titulo'>
                
                <div className='container--titulo'>
                    <label className='formulario-label'>Categoria</label>
                    <input
                        className={`formulario-input ${ (errors.categoria) ? "input-erro" : ""}`}
                        {...register("categoria", {required: "Campo obrigatório", minLength: 3, maxLength: 16})}
                        placeholder="Ex: Bolo, Torta..."
                    />
                    {errors.categoria && 
                    (<p className='formulario-erro'>{errors.categoria.message}</p>)}
                </div>
                
                <div className='container--titulo'>
                    <label className='formulario-label'>Nome</label>
                    <input
                        className={`formulario-input ${ (errors.nome) ? "input-erro" : ""}`}
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

            <input className='botao-enviar' type='submit' value="Anotar"/>
        </form>
    )
}

export default Formulario