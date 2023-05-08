const Project = require("../models/Project");
const { addProjectValidate, editProjectValidate } = require("./validate");
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
  if (!token) return res.status(404).send("Usuário não autenticado");
  else return token;
};

const addProject = async (req, res) => {
  const { error } = addProjectValidate(req.body);
  if (error) res.status(404).send(`Error JOI ==> ${error.message}`);

  try {
    await validateToken(req.body.email);

    const image = await uploadImage(req.file);

    const data = new Project({
      title: req.body.title,
      description: req.body.description,
      comments: req.body.comments,
      mobileSupport: req.body.mobileSupport,
      image: image.firebaseUrl,
      url: req.body.url,
      repository: req.body.repository,
    });

    await data.save();

    res.json({ message: "Documento adicionado com sucesso!" });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const editProject = async (req, res) => {
  let id = req.params.id;

  const data = {
    title: req.body.title,
    description: req.body.description,
    comments: req.body.comments,
    mobileSupport: req.body.mobileSupport,
    url: req.body.url,
    repository: req.body.repository,
  };
  const { error } = editProjectValidate(data);

  if (error) res.status(404).send(`Error do JOI ==> ${error.message}`);

  try {
    await validateToken(req.body.email);
    await Project.findByIdAndUpdate(id, data);
    res.json({ message: "Edição realizada com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
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

const deleteProject = async (req, res) => {
  let id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (!project) res.status(404).send("Projeto não existe.");

    await validateToken(req.body.email);
    await deleteImage(project.image);
    await Project.findByIdAndDelete(id);
    res.json({ message: "Exclusão realizada com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  queryTickets,
  addProject,
  editProject,
  deleteProject,
  editProjectImage,
  validateToken,
};
