const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { addUserValidate, editUserValidate } = require("./validate");
const controller = require("./controller");

const dashboard = async (req, res) => {
  try {
    //getting token
    const token = res.get("authorization-token");

    //search user and save token
    const user = await User.findOne({ email: req.body.email });
    await User.findByIdAndUpdate(user.id, { token });

    res.json(token);
  } catch (error) {
    res.status(404).send("Dashboard error => " + error.message);
  }
};

const queryUsers = async (req, res) => {
  try {
    const doc = await User.find({}, ["name", "email"]);
    res.json(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const addUser = async (req, res) => {
  const { error } = addUserValidate(req.body);
  if (error) res.status(404).json(`Error JOI ==> ${error.message}`);

  const authentication = req.body.authentication;
  const password = bcrypt.hashSync(req.body.password, 10);

  const data = new User({
    name: req.body.name,
    email: req.body.email,
    password,
    date: new Date(),
    lastChange: new Date(),
  });

  try {
    await controller.validateToken(authentication);

    const verifyUserExist = await User.findOne({ email: req.body.email });
    if (verifyUserExist) res.status(404).json("Usuário ou senha inválidos");

    await data.save();
    res.json("Usuário cadastrado com sucesso!");
  } catch (error) {
    res.status(404).json(error);
  }
};

const editUser = async (req, res) => {
  const { error } = editUserValidate(req.body);
  if (error) res.status(404).json(error.message);

  let id = req.params.id;
  const authentication = req.body.authentication;

  const user = {
    name: req.body.name,
    email: req.body.email,
    lastChange: new Date(),
  };

  try {
    await controller.validateToken(authentication);

    await User.findByIdAndUpdate(id, user);

    res.json("Usuário editado com sucesso!");
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;

  try {
    await controller.validateToken(req.body.email);
    const doc = await User.findByIdAndDelete(id);
    res.json("Usuário deletado com sucesso!");
  } catch (error) {
    res.status(404).send(error);
  }
};

//validate token
const validateToken = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email }, "-password");
    jwt.verify(data.token, process.env.TOKEN_SECRET);

    //return json with token and name
    const doc = {
      token: data.token,
      email: data.email,
      name: data.name,
    };

    res.json(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  dashboard,
  addUser,
  editUser,
  deleteUser,
  validateToken,
  queryUsers,
};
