import express, { Request, Response } from "express";
import path from "path";
import mainRoutes from "./routes/index";

const app = express();

app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(mainRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada!");
});

app.listen(3000);
