import httpClient from "utils/httpClient";

export default class CategoriesService {
  static fetchAll() {
    return httpClient.get("/categories");
  }
}
