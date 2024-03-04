import express from "express";
import controller from "./controller/index.js";
import middleware from "./middleware/index.js";
import { validateUser } from "./middleware/user.js";
export const routes = express();

routes.get("/", controller.getDrugs);
routes.get("/usuarios", controller.getAgeYoung);
routes.get("/categoria", controller.getCategories);
routes.get("/categoria/quantidade", controller.getCatCount);
routes.get("/categoria/nulo", controller.getCatNull);
routes.get("/usuario/idade", controller.getAge);
routes.get("/agenda", controller.getNotes);
routes.get("/user", controller.getList);
routes.get("/users/:id", middleware.validateUserId, controller.getListById);
routes.get("/anotacoes", controller.getNotices);

routes.post("/user", middleware.validateUser, controller.postUser);
routes.post("/:id/anotacao", middleware.validateNotes, controller.postNotes);

routes.put("/agenda/:id", controller.putLoad);
routes.put(
  "/users/:id",
  middleware.validateUser,
  middleware.validateUserId,
  controller.putUser
);

routes.delete("/agenda/:id", controller.deleteNotes);
routes.delete("/users/:id", middleware.validateUserId, controller.deleteUser);
