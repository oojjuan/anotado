import express from "express"
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({message: "Servidor Backend ligado"})
});

const port = 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))