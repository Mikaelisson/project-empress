const Joi = require("joi");

const addTicketValidate = (data) => {
  const schema = Joi.object({
    client: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    email: Joi.string().required(),
  });

  return schema.validate(data);
};

const editProjectValidate = (data) => {
  const schema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    comments: Joi.string(),
    mobileSupport: Joi.boolean(),
    url: Joi.string(),
    repository: Joi.string(),
  });

  return schema.validate(data);
};

const addUserValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    authentication: Joi.string().required(),
  });

  return schema.validate(data);
};

const editUserValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    authentication: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = {
  addTicketValidate,
  editProjectValidate,
  addUserValidate,
  editUserValidate,
};
