import knex from "../configs/connection.js";

export const validateUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundUser = await knex("users").where("id", id).first();
    if (!id) {
      return res.status(400).json({ error: "ID do usuário não fornecido" });
    }
    if (!foundUser) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
