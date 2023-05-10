const Project = require("../models/Project");
const { addTicketValidate, editTicketValidate } = require("./validate");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//ok
const queryTickets = async (req, res) => {
  try {
    const doc = await Project.find({});
    res.json(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

//ok
const validateToken = async (email) => {
  const validate = await User.findOne({ email }, "-password");
  const token = jwt.verify(validate.token, process.env.TOKEN_SECRET);
  if (!token) return res.status(404).json("Usuário não autenticado");
  else return token;
};

const addTicket = async (req, res) => {
  const { error } = addTicketValidate(req.body);
  if (error) res.status(404).send(`Error JOI ==> ${error.message}`);

  try {
    await validateToken(req.body.email);

    const data = new Project({
      title: req.body.title,
      client: req.body.client,
      description: req.body.description,
    });

    await data.save();

    res.json("Documento adicionado com sucesso!");
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const editTicket = async (req, res) => {
  let id = req.params.id;

  const data = {
    client: req.body.client,
    title: req.body.title,
    description: req.body.description,
  };

  const { error } = editTicketValidate({ ...data, email: req.body.email });
  if (error) {
    console.log(error.message);
    return res.status(404).json(error.message);
  }

  try {
    await validateToken(req.body.email);
    await Project.findByIdAndUpdate(id, data);
    res.json("Ticket modificado com sucesso!");
  } catch (error) {
    res.status(404).json(error);
  }
};

const editProjectImage = async (req, res) => {
  let id = req.params.id;

  try {
    await validateToken(req.body.email);
    const image = await uploadImage(req.file);

    const doc = await Project.findById(id);
    await deleteImage(doc.image);

    await Project.findByIdAndUpdate(id, { image: image.firebaseUrl });
    res.json({ message: "Upload realizado com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteTicket = async (req, res) => {
  let id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (!project)
      return res.status(404).json("Ticket inválido, tente novamente.");

    await validateToken(req.body.email);
    await Project.findByIdAndDelete(id);
    res.json("Ticket excluído com sucesso!");
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  queryTickets,
  addTicket,
  editTicket,
  deleteTicket,
  editProjectImage,
  validateToken,
};
