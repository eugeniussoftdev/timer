import jwt from "jsonwebtoken";

import authMiddleware from "../middlewares/authMiddleware";

const handler = (req, res) => {
  res.json({ message: "Not implemented" });
};

const handleLogin = (req, res) => {
  const { username, password } = req.body;

  const token = jwt.sign({ user: username }, "JWT_Secret", { expiredIn: "1h" });
  res.json({ token });
};

export const routes = (app) => {
  app.route("/").get(handler);

  app.route("/login");
  app
    .route("/counter")
    .get(authMiddleware, handler)
    .put(authMiddleware, handler)
    .post(authMiddleware, handler);
};
