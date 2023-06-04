import bodyParser from "body-parser";
import express from "express";

import { routes } from "./src/routes/routes";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
routes(app);

const server = app.listen(PORT, () => {
  console.log("*** SERVER IS RUNNIG...");
});
