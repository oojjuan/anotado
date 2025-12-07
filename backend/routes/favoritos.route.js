import { Router } from "express";
import { getFavoritos, postFavoritos } from "../controller/favoritos.controller.js";

export const router = Router()

//<> GET
router.get('/', getFavoritos)

//<> POST
router.post('/:id', postFavoritos)