import httpClient from "utils/httpClient";

export default class PostsService {
  static fetchAll(category) {
    return httpClient.get(`/posts?category=${category}`);
  }
}
