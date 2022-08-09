import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Painel");
});

router.get("/noticias", (req: Request, res: Response) => {
  res.send("Notícias");
});

export default router;
