import knex from "../configs/connection.js";

export const getAgeYoung = async (req, res) => {
  const young = await knex("usuarios").min("idade").debug();
  return res.status(201).json(young);
};

export const getAge = async (req, res) => {
  const young = await knex("usuarios")
    .select("idade")
    .where("idade", ">=", 18)
    .groupBy("idade")
    .count()
    .debug();
  return res.status(201).json(young);
};
