//url요청을 쪼개서 관리
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { login, logout, getJoin, postJoin } from "../controllers/userController";


const globalRouter = express.Router();

globalRouter.get(routes.join,getJoin);
globalRouter.post(routes.join,postJoin);

globalRouter.get(routes.home,home);

globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);
globalRouter.get(routes.search,search);

//코드 전체를 export함
export default globalRouter;