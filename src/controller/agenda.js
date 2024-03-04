import knex from "../configs/connection.js";

export const getNotes = async (req, res) => {
  const none = {
    nome: "Candido Ferraz",
    email: "exemplo123@gmail.com",
    telefone: "(81) 8412-9999",
  };
  const done = {
    nome: "Josefa Joaquina",
    email: "exemplo22@gmail.com",
    telefone: "(81) 8188-9999",
  };
  const agenda = await knex("agenda").insert([none, done]).returning("*");
  return res.status(200).json(agenda);
};

export const putLoad = async (req, res) => {
  const { nome, email, telefone } = req.body;
  const { id } = req.params;

  const otherNotes = await knex("agenda")
    .update({ nome, email, telefone })
    .where({ id })
    .returning("nome");
  return res.status(200).json(otherNotes);
};

export const deleteNotes = async (req, res) => {
  const { id } = req.params;

  const deleteNotes = await knex("agenda").del().where({ id }).returning("id");
  return res.status(201).json(deleteNotes);
};
