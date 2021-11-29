import http from "../http-common";

class CommentDataService {
  

  create(data) {
    return http.post("/comment", data);
  }

  

  
}

export default new PostDataService();