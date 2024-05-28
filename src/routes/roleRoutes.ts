import { Router } from "express";
import { validateBodyPayload } from "../vaildation/validator";
import { updateUserRoleSchema } from "../vaildation/schema";
import { allRoles, createRole, updateUserRole } from "../controllers/roleController";
const roleRoutes = Router();

roleRoutes.get('/allroles', allRoles);
roleRoutes.post('/createrole', createRole);
roleRoutes.put('/updateuserRole', validateBodyPayload.bind(null,updateUserRoleSchema ),updateUserRole);



export default roleRoutes;