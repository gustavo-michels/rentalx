import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

export const categoriesRoute = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoute.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories);
});
