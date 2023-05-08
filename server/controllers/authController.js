const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = res.get("authorization-token");
  if (!token) res.status(401).json("Acesso negado!");

  try {
    //verify token
    jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("Authenticated!");
    next();
  } catch (error) {
    console.log("auth ==>" + error.message);
    res.status(401).json("Acesso negado!");
  }
};
