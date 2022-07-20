import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoriesRepository } from "../repositories/PostgresCetegoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

export const categoriesRoute = Router();
// const categoriesRepository = new PostgresCategoriesRepository();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoute.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories);
});
