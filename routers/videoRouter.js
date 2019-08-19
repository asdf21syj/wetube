//url요청을 쪼개서 관리
import express from "express";
import routes from "../routes";
import { upload,videoDetail ,editVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload,upload);
videoRouter.get(routes.videoDetail,videoDetail);
videoRouter.get(routes.editVideo,editVideo);

//코드 전체를 export함
export default videoRouter;