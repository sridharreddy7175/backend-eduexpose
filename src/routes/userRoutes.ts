import { Router } from "express";
import { validateBodyPayload } from "../vaildation/validator";
import { updateUserRoleSchema } from "../vaildation/schema";
import { allUsers, createRegister, createUser, userLogin,userInfo, allRegisterList } from "../controllers/userController";
const userRoutes = Router();

userRoutes.get('/allusers', allUsers);
userRoutes.post('/createuser', createUser);
userRoutes.post('/createRegister', createRegister);
userRoutes.post('/login', userLogin);
userRoutes.post('/userInfo', userInfo);

userRoutes.get('/allRegisterList',allRegisterList)






export default userRoutes;