import express from "express";

import { categoriesRoute } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoute);
app.use("/specifications", specificationsRoutes);

app.get("/", (request, response) => {
  return response.json({ message: "Hello World." });
});

app.listen(3333, () => console.log("Server is running..."));
