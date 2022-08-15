import { Router } from "express";
import { home } from "../controllers/homeController";
import * as InfoController from "../controllers/infoController"
import * as UserController from "../controllers/userController"

const router = Router();

router.get("/", home);

router.get("/sobre", InfoController.about);
router.get("/contato", InfoController.contact);

router.get('/nome', UserController.nome)
router.get('/idade', UserController.idadeForm)
router.post('/idade-resultado', UserController.idadeAction)

export default router;
