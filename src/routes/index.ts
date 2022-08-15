import { Router, Request, Response } from "express";

const router = Router();

interface Product {
  title: string;
  price: number;
}
interface User {
  name: string;
  age: number;
  status: boolean;
  address: string[];
  products: Product[];
}

router.get("/", (req: Request, res: Response) => {
  const activeUser: boolean = true;
  let status: boolean = false;
  if (activeUser) {
    status = true;
  }

  const user: User = {
    name: "Robson",
    age: 27,
    status,
    address: ["Rua 1", "Rua 2", "Rua 3"],
    products: [
      { title: "Produto x", price: 10 },
      { title: "Produto y", price: 15 },
      { title: "Produto w", price: 20 },
    ],
  };
  res.render("pages/home", {
    user,
  });
});

router.get("/sobre", (req: Request, res: Response) => {
  res.render("pages/about");
});

router.get("/contato", (req: Request, res: Response) => {
  res.render("pages/contact");
});

router.get('/nome', (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;
  res.render('pages/nome', {
    nome,
    idade
  })
})

router.get('/idade', (req: Request, res: Response) => {
  res.render('pages/idade');
})

router.post('/idade-resultado', (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;
  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }
  res.render('pages/idade', {
    idade,
    mostrarIdade
  })
})

export default router;
