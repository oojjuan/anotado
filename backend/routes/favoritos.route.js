import { Router } from "express";
import { deleteFavorito, getFavoritos, postFavoritos } from "../controller/favoritos.controller.js";

export const router = Router()

//<> GET
router.get('/', getFavoritos)

//<> POST
router.post('/', postFavoritos)

//<> DELETE
router.delete('/:id', deleteFavorito)