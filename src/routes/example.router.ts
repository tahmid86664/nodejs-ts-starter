/**
 * Endpoints definition according to the service such as auth, user, etc.
 */

import { Router } from "express";
import { requireUser, validateResource } from "../middleware";
import { asyncWrapper } from "../utils";
import { examplePostHandler } from "../controllers";
import { exampleDataSchema } from "../schemas";

const router = Router();

router.post("/create", requireUser, validateResource(exampleDataSchema), asyncWrapper(examplePostHandler));

export default router;
