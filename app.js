import express from "express";//서버생성패키지
import morgan from "morgan";//로깅을 위한 미들웨어
import helmet from "helmet";//보안을 위한 미들웨어
import cookieParser from "cookie-parser"; //쿠키/세션을 위한 미들웨어
import bodyParser from "body-parser"; //body로부터 정보를 얻을 수있게해줌
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();

/*
const handleHome = (req, res) => res.send("hello from home!");

const handleProfile = (req, res) =>res.send("hello from profile");
*/

//확장자 pug 설정
app.set("view engine","pug");

//use() - send가 응답해주기 전에 실행될 미들웨어 선언
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

// /user 요청시 router에 요청하여 하위 디렉티브는
// router 디렉티브를 참조함

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

export default app;