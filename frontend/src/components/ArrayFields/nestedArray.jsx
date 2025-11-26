import { useFieldArray } from "react-hook-form"

export default function Nested({ nestIndex, control, register, nomeLista, errors }) {
    const keyLista = nomeLista === 'listaIngredientes' ? "ingredientes" : "etapa"

    const { fields, remove, append } = useFieldArray({
        control,
        name: `${nomeLista}[${nestIndex}].${keyLista}`,
        rules: { minLength: { value: 2, message: "É necessário no mínimo dois itens na lista"}}
    })

    return (
        <section className="lista--sublista">
            {fields.map((item, k) => {
                return (
                    <>
                        <div className="sublista-input" key={item.id}>
                            <label className="formulario-label">{k + 1}°: </label>
                            <textarea
                                className={`formulario-textarea ${ (errors?.[nomeLista]?.[nestIndex]?.[keyLista]?.[k]?.textos) ? "input-erro" : ""}`} 
                                {...register(`${nomeLista}[${nestIndex}].${keyLista}.${k}.textos`, {required: `Campo '${keyLista}' é obrigatório`})}
                                placeholder={nomeLista === 'listaIngredientes' ? "Ingrediente..." : "Etapa..."}
                                style={{resize: "none"}} 
                            />
                            <button className="botao-excluir--item" type="button" onClick={() => {remove(k)}}>
                                x
                            </button>
                        </div>

                        {errors?.[nomeLista]?.[nestIndex]?.[keyLista]?.[k]?.textos && (<p className="formulario-erro">{errors[nomeLista][nestIndex][keyLista][k].textos.message}</p>)}
                    </>
                )
            })}
            {errors?.[nomeLista]?.[nestIndex]?.[keyLista]?.root && (<p className="formulario-erro">{errors[nomeLista][nestIndex][keyLista].root.message}</p>)}
            <button className="botao-adicionar--item" type="button" onClick={() => {append({ [nomeLista]: ""})}}>
                Novo item
            </button>
        </section>
    )
}