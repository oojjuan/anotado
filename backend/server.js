import express from "express";
import cors from "cors";
import { router as rotaReceita } from "./routes/receitas.js"


const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());
app.use('/receitas', rotaReceita)

const port = 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))