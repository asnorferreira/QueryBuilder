import knex from "../configs/connection.js";

export const getDrugs = async (req, res) => {
  const drugs = await knex("farmacia").sum("estoque").debug();
  return res.status(201).json(drugs);
};

export const getCategories = async (req, res) => {
  const categories = await knex("farmacia")
    .whereNotNull("categoria")
    .select("categoria")
    .groupBy("categoria")
    .count()
    .debug();
  return res.status(201).json(categories);
};

export const getCatCount = async (req, res) => {
  const category = await knex("farmacia")
    .whereNotNull("categoria")
    .groupBy("categoria")
    .count()
    .debug();
  return res.status(201).json(category);
};

export const getCatNull = async (req, res) => {
  const category = await knex("farmacia")
    .whereNull("categoria")
    .select("categoria")
    .groupBy("categoria")
    .count()
    .debug();
  return res.status(201).json(category);
};
