import knex from "../configs/connection.js";

export const getList = async (req, res) => {
  try {
    const users = await knex("users").select("*");

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error ao listar dados: ", error);
    return res.status(500).json(error.message);
  }
};

export const getListById = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await knex("users").select("*").where({ id }).first();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error ao listar dados por id: ", error);
    return res.status(500).json(error.message);
  }
};

export const postUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    if (!nome || !email || !senha) {
      return res.status(401).json({ error: "Preencha todos os campos" });
    }
    const user = await knex("users")
      .insert({ nome, email, senha })
      .returning(["id", "nome"]);
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error ao cadastrar usuário: ", error);
    return res.status(500).json(error.message);
  }
};

export const putUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;
  try {
    const users = await knex("users")
      .update({ nome, email, senha })
      .where({ id })
      .returning(["id", "nome", "email"]);
    return res.status(201).json(users);
  } catch (error) {
    console.error("Error ao atualizar usuário: ", error);
    return res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await knex("users").del().where({id}).returning('*');
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error ao deletar usuário: ", error);
    return res.status(500).json(error.message);
  }
}