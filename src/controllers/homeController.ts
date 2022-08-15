import { Request, Response } from 'express'


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

export const home = (req: Request, res: Response) => {
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
};