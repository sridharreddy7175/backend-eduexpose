import { Router } from "express";
import { validateBodyPayload } from "../vaildation/validator";
import { updateUserRoleSchema } from "../vaildation/schema";
import { allUsers, createRegister, createUser, userLogin } from "../controllers/userController";
const userRoutes = Router();

userRoutes.get('/allusers', allUsers);
userRoutes.post('/createuser', createUser);
userRoutes.post('/createRegister', createRegister);
userRoutes.post('/login', userLogin);





export default userRoutes;