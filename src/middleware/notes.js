import knex from "../configs/connection.js";

export const validateNotes = async (req, res, next) => {
  const { id } = req.params;
  const { nota } = req.body;
  try {
    if (!id) {
      return res.status(400).json({
        error: "Insira o id da agenda",
      });
    }
    if (!nota) {
      return res.status(400).json({
        error: "Insira os campos obrigatórios",
      });
    }
    const idAgenda = await knex("agenda").where({ id }).first();
    if (!idAgenda) {
      return res.status(404).json({
        error: "Agenda não encontrada",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
