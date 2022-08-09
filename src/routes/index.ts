import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Sobre");
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Contato");
});

export default router;
