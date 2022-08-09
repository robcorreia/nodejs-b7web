import express from "express";
import mainRoutes from "./routes/index";
import painelRoutes from "./routes/painel";
const app = express();

app.use(mainRoutes);
app.use("/painel", painelRoutes);

app.listen(3000);
