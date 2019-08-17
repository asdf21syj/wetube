//url요청을 쪼개서 관리
import express from "express";
import routes from "../routes";
import { editProfile,userDetail,changePassword } from "../controllers/userController";

const userRouter = express.Router();

//export const, default export와 다른점은
//현재 선언된 변수만 export한다는 것
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.userDetail,userDetail);


export default userRouter;