import { Router } from "express";
import { putReceita } from "../controller/editar.controller.js";

export const router = Router()

//<> PUT
router.put('/:id', putReceita)