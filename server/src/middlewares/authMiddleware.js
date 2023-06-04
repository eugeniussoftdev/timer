import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const toker = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, Authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "JWT_Secret");
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
