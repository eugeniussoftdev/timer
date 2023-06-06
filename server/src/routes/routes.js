import express from "express";
import jwt from "jsonwebtoken";

import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const handler = (req, res) => {
  res.json({ message: "Not implemented" });
};

export const routes = (app) => {
  app.route("/").post(registerUser);
  app.route("/login").post(loginUser);
  app.route("/logout").post(logoutUser);

  app
    .route("/counter")
    .get(authMiddleware, handler)
    .put(authMiddleware, handler)
    .post(authMiddleware, handler);
};

const usersRouter = express.Router();

usersRouter.post("/", registerUser);
usersRouter.post("/login", loginUser);
usersRouter.post("/logout", logoutUser);

export { usersRouter };
