import './titulo.css'

function Titulo({ children, fontSize, fontColor }) {
    
    if (fontSize === 'tamanho-principal') {
        return (
            <h1 className={`titulo ${fontSize} ${fontColor}`} >{children}</h1>
        )
    } else {
        return (
            <h2 className={`titulo ${fontSize} ${fontColor}`} >{children}</h2>
        )
    }
    
}

export default Titulo