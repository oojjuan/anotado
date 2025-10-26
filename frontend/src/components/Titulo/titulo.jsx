function Titulo({ children, fonteTamanho, fonteCor, fontePeso, tipoTitulo, fonteFamilia, fonteFormatacao, className}) {
    
    const Tag = tipoTitulo === "principal" ? "h1" : "h2";
    const tiposColors = {
        "escuro" : "#311F15",
        "claro": "#D5CEA3"
    }
    const tiposWeight = {
        "fino": 300,
        "normal": 400,
        "negrito": 500
    }
    const tiposFamily = {
        "principal": "Alan Sans",
        "texto": "Raleway",
        "enfase": "Inter"
    }
    const tiposTransform = {
        "maiuscula" : "uppercase",
        "minuscula": "lowercase",
        "normal": "none"
    }

    return (
        <Tag 
        className={className}
        style={{
            fontWeight: tiposWeight[fontePeso],
            color: tiposColors[fonteCor],
            fontSize: `${fonteTamanho}rem`,
            fontFamily: tiposFamily[fonteFamilia],
            letterSpacing: Tag === "h1" ? "10px" : "2px",
            textTransform: tiposTransform[fonteFormatacao],
            margin: "25px 0"
        }}>{children}
        </Tag>
    )
    
    
}

export default Titulo