import { Router, Request, Response } from "express";

const router = Router();
interface User {
  name: string;
  age: number;
}

router.get("/", (req: Request, res: Response) => {
  const user: User = {
    name: "Robson",
    age: 27,
  };
  res.render("home", {
    user,
  });
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Sobre");
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Contato");
});

export default router;
