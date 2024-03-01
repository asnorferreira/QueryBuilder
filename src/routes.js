import express from "express";
import controller from "./controller/index.js";
export const routes = express();

routes.get("/", controller.getDrugs);
routes.get("/usuarios", controller.getAgeYoung);
routes.get("/categoria", controller.getCategories);
routes.get("/categoria/quantidade", controller.getCatCount);
routes.get("/categoria/nulo", controller.getCatNull);
routes.get("/usuario/idade", controller.getAge);
