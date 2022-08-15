import { Request, Response } from 'express'
import { Product } from '../models/Product'

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
  expansivesProducts: Product[];
}

export const home = (req: Request, res: Response) => {
  const activeUser: boolean = true;
  let status: boolean = false;
  if (activeUser) {
    status = true;
  }

  let productList = Product.getAll();
  let expensiveProductList = Product.getFromPriceAfter(12);


  const user: User = {
    name: "Robson",
    age: 27,
    status,
    address: ["Rua 1", "Rua 2", "Rua 3"],
    products: productList,
    expansivesProducts: expensiveProductList,
  };
  res.render("pages/home", {
    user,
  });
};