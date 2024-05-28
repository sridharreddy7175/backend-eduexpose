import { Router } from "express";
import { allMeets, createMeet } from "../controllers/meetController";
import { validateBodyPayload } from "../vaildation/validator";
import { meetSchema } from "../vaildation/schema";
const meetRoutes = Router();

meetRoutes.get('/allmeets', allMeets);
meetRoutes.post('/createmeet',validateBodyPayload.bind(null, meetSchema), createMeet);



export default meetRoutes;