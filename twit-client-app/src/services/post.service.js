import http from "../http-common";

class PostDataService {
  getAll() {
    return http.get("/getAllPost");
  }

  get(id) {
    return http.get(`/getPostById/${id}`);
  }

  create(data) {
    return http.post("/post", data);
  }

  update(id, data) {
    return http.put(`/post/${id}`, data);
  }

  delete(id) {
    return http.delete(`/post/${id}`);
  }

  deleteAll() {
    return http.delete(`/posts`);
  }

  
}

export default new PostDataService();