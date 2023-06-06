import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import { connectionDB } from "./src/config/db";
import { usersRouter } from "./src/routes/routes";

dotenv.config();
connectionDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/user", usersRouter);
app.use("/", (req, res) => {
  res.send("Ready");
});

const server = app.listen(PORT, () => {
  console.log("*** SERVER IS RUNNIG...");
});
