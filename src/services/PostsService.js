import httpClient from "utils/httpClient";

export default class PostsService {
  static fetchAll() {
    return httpClient.get("/posts");
  }
}
