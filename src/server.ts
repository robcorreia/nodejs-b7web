import express from "express";
import mainRoutes from "./routes/index";

const app = express();

app.use(mainRoutes);

app.listen(3000);
