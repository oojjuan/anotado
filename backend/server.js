import express from "express";
import cors from "cors";
import { router as rotaReceita } from "./routes/receitas.route.js"
import { router as rotaCriar } from "./routes/criar.route.js"


const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());
app.use('/receitas', rotaReceita)
app.use('/criar', rotaCriar)

const port = 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))