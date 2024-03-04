import knex from "../configs/connection.js";

export const validateUser = async (req, res, next) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(401).json({ error: "Preencha todos os campos" });
    }

    if (senha.length < 6) {
      return res
        .status(400)
        .json({ error: "A senha deverá conter no mínimo 6 caracteres" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
