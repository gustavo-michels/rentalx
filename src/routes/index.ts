import { Router } from "express";

import { categoriesRoute } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

export const router = Router();

router.use("/categories", categoriesRoute);
router.use("/specifications", specificationsRoutes);
