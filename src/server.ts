import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from 'dotenv'
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use("/static", express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true })); //habilita coletar dados via post

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada!");
});

server.listen(process.env.PORT);
