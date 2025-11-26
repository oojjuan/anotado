import { useFieldArray } from "react-hook-form";
import Titulo from '../Titulo/titulo.jsx'
import Nested from "./nestedArray.jsx";

export default function Fields({ control, register, errors, nomeLista}) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `${nomeLista}`
    })

    return (
        <aside className="container-listas--lista">
            <Titulo
                fonteTamanho="2"
                fonteCor="escuro"
                fontePeso="normal"
                fonteFamilia="enfase"
                fonteFormatacao="maiuscula"
            >{nomeLista === 'listaIngredientes' ? "Lista de ingredientes" : "Modo de Preparo"}
            </Titulo>
            
            {fields.map((elemento, index) => {
                return (
                        <>
                            <label className='formulario-label tipo-titulo'>
                                {nomeLista === 'listaIngredientes' ? "Lista de ingredientes para:" : "Modo de Preparo do/a:"}
                            </label>
                            <input 
                                className={`formulario-input tipo-titulo${ (errors?.[nomeLista]?.[index]?.preparo) ? "input-erro" : ""}`}
                                {...register(`${nomeLista}[${index}].preparo`, {required: "Campo de 'preparo' é obrigatório", minLength: 3, maxLength: 16})} 
                                placeholder={`${nomeLista === 'listaIngredientes' ? "Ingredientes do/a..." : "Preparo para..."}`}   
                            />

                            {errors?.[nomeLista]?.[index]?.preparo && 
                            (<p className='formulario-erro'>{errors[nomeLista][index].preparo.message}</p>)}

                            <Nested nestIndex={index} nomeLista={nomeLista} errors={errors} {...{ control, register }} />
                            
                            <button className="botao-excluir--lista" type="button" onClick={() => remove(index)}>
                                Excluir lista
                            </button>
                        </>
                )
            })}

            <button className="botao-adicionar--lista" 
                type="button"
                onClick={() => {
                    append()
                }}
            >
                Nova lista
            </button>
        </aside>
    )

}