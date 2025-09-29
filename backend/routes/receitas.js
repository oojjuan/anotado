import { Router } from "express";
import { getReceitas } from "../controller/receitas.js"

export const router = Router()

//<> GETs
router.get('/', getReceitas)
// router.get('/:id', getReceita)

//<> DELETE
// router.delete('/:id', deleteReceita)

