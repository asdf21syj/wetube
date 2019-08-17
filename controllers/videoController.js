export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
    // const query = req.query.term; ES6 이전방식

   //컨트롤러도 query에 접근하려면, method가 get이어야 한다
    const { query: { term: searchingBy } } = req;
     //제약선언 { req객체 안에 query : {queryName:변수명지정}} = req 객체
     
    //res.render("search", { pageTitle: "Search", searchingBy: searchingBy }); 
    res.render("search", { pageTitle: "Search", searchingBy}); //위와 같다
    
};
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });