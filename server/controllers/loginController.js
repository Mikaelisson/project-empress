const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const errorMessages = {
    invalidUser: "Usuário ou senha inválidos.",
  };
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (user.email == "" || user.password == "")
      return res.status(400).json(errorMessages.invalidUser);

    //search user
    const doc = await User.findOne({ email: user.email });
    if (!doc) return res.status(400).json(errorMessages.invalidUser);

    //check password
    const validatePassword = bcrypt.compareSync(user.password, doc.password);
    if (!validatePassword)
      return res.status(400).json(errorMessages.invalidUser);

    if (validatePassword) {
      //token creation
      const token = jwt.sign({ _id: doc.id }, process.env.TOKEN_SECRET, {
        expiresIn: 60 * 30,
      });

      //token added in response
      res.header("authorization-token", token);
      next();
    }
  } catch (error) {
    console.log("login ==>" + error.message);
    res.status(404).json(error.message);
  }
};
