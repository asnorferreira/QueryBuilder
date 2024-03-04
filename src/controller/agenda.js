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

export const postNotes = async (req, res) => {
  const { nota } = req.body;
  const { id } = req.params;
  try {
    const notes = await knex("anotacoes")
      .insert({ agenda_id: id, nota })
      .returning("*");
    return res.status(201).json(notes);
  } catch (error) {
    console.error("Error ao cadastrar anotações: ", error);
    return res.status(500).json(error.message);
  }
};

export const getNotices = async (req, res) => {
  try {
    const getNote = await knex("anotacoes").join(
      "agenda",
      "anotacoes.agenda_id",
      "agenda.id"
    ).select("anotacoes.*", "agenda.nome");
    return res.status(200).json(getNote);
  } catch (error) {
    console.error("Error ao listar anotações: ", error);
    return res.status(500).json(error.message);
  }
};
