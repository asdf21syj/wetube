import routes from "./routes";
//전역변수 설정을 위한 js파일
export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next(); // 미들웨어로 next()호출해 다음에 있는 라우터로 넘어감
};