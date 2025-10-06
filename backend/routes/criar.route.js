import { Router } from 'express'
import { postReceita } from '../controller/criar.controller.js'

export const router = Router()

//<> POST
router.post('/', postReceita)