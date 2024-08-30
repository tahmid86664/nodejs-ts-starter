// import validateResource from "../middleware/validateResource";
import { Router } from "express";
import { getExamplesHandler } from "../controllers";

const router = Router();

router.get("", getExamplesHandler);
// router.post("/create", requireUser, validateResource(createExample), createExampleHandler); // * It's an example

export default router;
